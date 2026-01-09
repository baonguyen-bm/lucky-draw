import type { IPrizeConfig } from '@/types/storeType'
import { defineStore } from 'pinia'
import { defaultCurrentPrize, defaultPrizeList } from './data'

export const usePrizeConfig = defineStore('prize', {
    state() {
        return {
            prizeConfig: {
                prizeList: defaultPrizeList,
                currentPrize: defaultCurrentPrize,
                temporaryPrize: {
                    id: '',
                    name: '',
                    sort: 0,
                    isAll: false,
                    count: 1,
                    isUsedCount: 0,
                    picture: {
                        id: '-1',
                        name: '',
                        url: '',
                    },
                    separateCount: {
                        enable: true,
                        countList: [],
                    },
                    desc: '',
                    isShow: false,
                    isUsed: false,
                    frequency: 1,
                } as IPrizeConfig,
            },
        }
    },
    getters: {
    // Get all configurations
        getPrizeConfigAll(state) {
            return state.prizeConfig
        },
        // Get prize list
        getPrizeConfig(state) {
            return state.prizeConfig.prizeList
        },
        // Get configuration by ID
        getPrizeConfigById(state) {
            return (id: number | string) => {
                return state.prizeConfig.prizeList.find(item => item.id === id)
            }
        },
        // Get current prize
        getCurrentPrize(state) {
            return state.prizeConfig.currentPrize
        },
        // Get temporary prize
        getTemporaryPrize(state) {
            return state.prizeConfig.temporaryPrize
        },

    },
    actions: {
    // Set prize
        setPrizeConfig(prizeList: IPrizeConfig[]) {
            this.prizeConfig.prizeList = prizeList
        },
        // Add prize
        addPrizeConfig(prizeConfigItem: IPrizeConfig) {
            this.prizeConfig.prizeList.push(prizeConfigItem)
        },
        // Delete prize
        deletePrizeConfig(prizeConfigItemId: number | string) {
            this.prizeConfig.prizeList = this.prizeConfig.prizeList.filter(item => item.id !== prizeConfigItemId)
        },
        // Update prize data
        updatePrizeConfig(prizeConfigItem: IPrizeConfig) {
            const prizeListLength = this.prizeConfig.prizeList.length
            if (prizeConfigItem.isUsed && prizeListLength) {
                for (let i = 0; i < prizeListLength; i++) {
                    if (!this.prizeConfig.prizeList[i].isUsed) {
                        this.setCurrentPrize(this.prizeConfig.prizeList[i])
                        break
                    }
                }
            }
            else {
                return
            }
            this.resetTemporaryPrize()
        },
        // Delete all prizes
        deleteAllPrizeConfig() {
            this.prizeConfig.prizeList = [] as IPrizeConfig[]
        },
        // Set current prize
        setCurrentPrize(prizeConfigItem: IPrizeConfig) {
            this.prizeConfig.currentPrize = prizeConfigItem
        },
        // Set temporary prize
        setTemporaryPrize(prizeItem: IPrizeConfig) {
            if (prizeItem.isShow === false) {
                for (let i = 0; i < this.prizeConfig.prizeList.length; i++) {
                    if (this.prizeConfig.prizeList[i].isUsed === false) {
                        this.setCurrentPrize(this.prizeConfig.prizeList[i])

                        break
                    }
                }
                this.resetTemporaryPrize()

                return
            }

            this.prizeConfig.temporaryPrize = prizeItem
        },
        // Reset temporary prize
        resetTemporaryPrize() {
            this.prizeConfig.temporaryPrize = {
                id: '',
                name: '',
                sort: 0,
                isAll: false,
                count: 1,
                isUsedCount: 0,
                picture: {
                    id: '-1',
                    name: '',
                    url: '',
                },
                separateCount: {
                    enable: true,
                    countList: [],
                },
                desc: '',
                isShow: false,
                isUsed: false,
                frequency: 1,
            } as IPrizeConfig
        },
        // Reset all configurations
        resetDefault() {
            this.prizeConfig = {
                prizeList: defaultPrizeList,
                currentPrize: defaultCurrentPrize,
                temporaryPrize: {
                    id: '',
                    name: '',
                    sort: 0,
                    isAll: false,
                    count: 1,
                    isUsedCount: 0,
                    picture: {
                        id: '-1',
                        name: '',
                        url: '',
                    },
                    separateCount: {
                        enable: true,
                        countList: [],
                    },
                    desc: '',
                    isShow: false,
                    isUsed: false,
                    frequency: 1,
                } as IPrizeConfig,
            }
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                // To store in localStorage
                storage: localStorage,
                key: 'prizeConfig',
            },
        ],
    },
})
