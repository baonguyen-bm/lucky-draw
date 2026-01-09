import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'
import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref, toRaw } from 'vue'
import { IndexDb } from '@/utils/dexie'
import { defaultPersonList } from './data'
import { usePrizeConfig } from './prizeConfig'

// Get array of keys from IPersonConfig
export const personListKey = Object.keys(defaultPersonList[0])
export const usePersonConfig = defineStore('person', () => {
    const personDb = new IndexDb('person', ['allPersonList', 'alreadyPersonList'], 1, ['createTime'])
    // NOTE: state
    const personConfig = ref({
        allPersonList: [] as IPersonConfig[],
        alreadyPersonList: [] as IPersonConfig[],
    })
    personDb.getDataSortedByDateTime('allPersonList', 'createTime').then((data) => {
        personConfig.value.allPersonList = data
    })
    personDb.getAllData('alreadyPersonList').then((data) => {
        personConfig.value.alreadyPersonList = data
    })

    // NOTE: getter
    // Get all configurations
    const getPersonConfig = computed(() => personConfig.value)
    // Get list of all personnel
    const getAllPersonList = computed(() => personConfig.value.allPersonList)
    // Get list of personnel who haven't won this prize
    const getNotThisPrizePersonList = computed(() => {
        const currentPrize = usePrizeConfig().prizeConfig.currentPrize
        const data = personConfig.value.allPersonList.filter((item: IPersonConfig) => {
            return !item.prizeId.includes(currentPrize.id as string)
        })

        return data
    })

    // Get list of already won personnel
    const getAlreadyPersonList = computed(() => {
        return personConfig.value.allPersonList.filter((item: IPersonConfig) => {
            return item.isWin === true
        })
    })
    // Get details of already won personnel
    const getAlreadyPersonDetail = computed(() => personConfig.value.alreadyPersonList)
    // Get list of personnel who haven't won any prize
    const getNotPersonList = computed(() => personConfig.value.allPersonList.filter((item: IPersonConfig) => {
        return item.isWin === false
    }))
    // NOTE: action
    // Add all non-winning personnel
    function addNotPersonList(personList: IPersonConfig[]) {
        if (personList.length <= 0) {
            return
        }
        personList.forEach((item: IPersonConfig) => {
            personConfig.value.allPersonList.push(item)
        })
        personDb.setAllData('allPersonList', personList)
    }
    // Add data
    function addOnePerson(person: IPersonConfig[]) {
        if (person.length <= 0) {
            return
        }
        if (person.length > 1) {
            console.warn('Only single user addition is supported')
            return
        }
        person.forEach((item: IPersonConfig) => {
            personConfig.value.allPersonList.push(item)
            personDb.setData('allPersonList', item)
        })
    }
    // Add winning personnel
    function addAlreadyPersonList(personList: IPersonConfig[], prize: IPrizeConfig | null) {
        if (personList.length <= 0) {
            return
        }
        personList.forEach((person: IPersonConfig) => {
            personConfig.value.allPersonList.map((item: IPersonConfig) => {
                if (item.id === person.id && prize != null) {
                    item.isWin = true
                    // person.isWin = true
                    item.prizeName.push(prize.name)
                    // person.prizeName += prize.name
                    item.prizeTime.push(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
                    // person.prizeTime = new Date().toString()
                    item.prizeId.push(prize.id as string)
                }
                return item
            })
            personConfig.value.alreadyPersonList.push(person)
            personDb.updateData('allPersonList', toRaw(person))
            personDb.setData('alreadyPersonList', toRaw(person))
        })
    }
    // Move from already won to not won
    function moveAlreadyToNot(person: IPersonConfig) {
        if (person.id === undefined || person.id == null) {
            return
        }
        const alreadyPersonListLength = personConfig.value.alreadyPersonList.length
        for (let i = 0; i < personConfig.value.allPersonList.length; i++) {
            if (person.id === personConfig.value.allPersonList[i].id) {
                personConfig.value.allPersonList[i].isWin = false
                personConfig.value.allPersonList[i].prizeName = []
                personConfig.value.allPersonList[i].prizeTime = []
                personConfig.value.allPersonList[i].prizeId = []
                personDb.updateData('allPersonList', toRaw(personConfig.value.allPersonList[i]))
                break
            }
        }
        const alreadyPersonListRaw = toRaw(personConfig.value.alreadyPersonList)
        for (let i = 0; i < alreadyPersonListLength; i++) {
            personConfig.value.alreadyPersonList = alreadyPersonListRaw.filter((item: IPersonConfig) =>
                item.id !== person.id,
            )
        }
        personDb.deleteData('alreadyPersonList', person)
    }
    // Delete specific personnel
    function deletePerson(person: IPersonConfig) {
        if (person.id !== undefined || person.id != null) {
            const allPersonListRaw = toRaw(personConfig.value.allPersonList)
            const alreadyPersonListRaw = toRaw(personConfig.value.alreadyPersonList)
            personConfig.value.allPersonList = allPersonListRaw.filter((item: IPersonConfig) => item.id !== person.id)
            personConfig.value.alreadyPersonList = alreadyPersonListRaw.filter((item: IPersonConfig) => item.id !== person.id)
            personDb.deleteData('allPersonList', person)
            personDb.deleteData('alreadyPersonList', person)
        }
    }
    // Delete all personnel
    function deleteAllPerson() {
        personConfig.value.allPersonList = []
        personConfig.value.alreadyPersonList = []
        personDb.deleteAll('allPersonList')
        personDb.deleteAll('alreadyPersonList')
    }

    // Delete all personnel
    function resetPerson() {
        personConfig.value.allPersonList = []
        personConfig.value.alreadyPersonList = []
        personDb.deleteAll('allPersonList')
        personDb.deleteAll('alreadyPersonList')
    }
    // Reset winning personnel
    function resetAlreadyPerson() {
        // Merge winning personnel back into non-winning personnel; verify if they already exist
        personConfig.value.allPersonList.forEach((item: IPersonConfig) => {
            item.isWin = false
            item.prizeName = []
            item.prizeTime = []
            item.prizeId = []
        })
        personConfig.value.alreadyPersonList = []
        const allPersonListRaw = toRaw(personConfig.value.allPersonList)
        personDb.deleteAll('allPersonList')
        personDb.setAllData('allPersonList', allPersonListRaw)
        personDb.deleteAll('alreadyPersonList')
    }
    function setDefaultPersonList() {
        personConfig.value.allPersonList = defaultPersonList.map((item: any) => {
            item.uuid = uuidv4()
            return item
        })
        personConfig.value.alreadyPersonList = []
        personDb.setAllData('allPersonList', defaultPersonList)
        personDb.deleteAll('alreadyPersonList')
    }
    // Reset all configurations
    function reset() {
        personConfig.value = {
            allPersonList: [] as IPersonConfig[],
            alreadyPersonList: [] as IPersonConfig[],
        }
        personDb.deleteAll('allPersonList')
        personDb.deleteAll('alreadyPersonList')
    }
    return {
        personConfig,
        getPersonConfig,
        getAllPersonList,
        getNotThisPrizePersonList,
        getAlreadyPersonList,
        getAlreadyPersonDetail,
        getNotPersonList,
        addNotPersonList,
        addOnePerson,
        addAlreadyPersonList,
        moveAlreadyToNot,
        deletePerson,
        deleteAllPerson,
        resetPerson,
        resetAlreadyPerson,
        setDefaultPersonList,
        reset,
    }
})
