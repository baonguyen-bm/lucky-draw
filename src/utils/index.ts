import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
/**
 * @description: Process table data, adding x, y, id and other information
 * @param tableData Table data
 * @param localRowCount Number of elements per row
 * @returns Processed table data
 */
export function filterData(tableData: any[], localRowCount: number) {
    const dataLength = tableData.length
    let j = 0
    for (let i = 0; i < dataLength; i++) {
        if (i % localRowCount === 0) {
            j++
        }
        tableData[i].x = i % localRowCount + 1
        tableData[i].y = j
        tableData[i].id = i
        // Whether won
    }

    return tableData
}

export function addOtherInfo(personList: any[]) {
    const len = personList.length
    for (let i = 0; i < len; i++) {
        personList[i].id = uuidv4()
        personList[i].createTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss:ms')
        personList[i].updateTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss:ms')
        personList[i].prizeName = [] as string[]
        personList[i].prizeTime = [] as string[]
        personList[i].prizeId = []
        personList[i].isWin = false
        personList[i].uuid = uuidv4()
    }

    return personList
}

export function selectCard(cardIndexArr: number[], tableLength: number, personId: number): number {
    const cardIndex = Math.floor(Math.random() * (tableLength - 1))
    if (cardIndexArr.includes(cardIndex)) {
        return selectCard(cardIndexArr, tableLength, personId)
    }

    return cardIndex
}

export function themeChange(theme: string) {
    // Get root html
    const html = document.querySelectorAll('html')
    if (html) {
        html[0].setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }
}
