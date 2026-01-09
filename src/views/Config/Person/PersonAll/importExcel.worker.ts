import * as XLSX from 'xlsx'
import { addOtherInfo } from '@/utils'
// Define message types
interface WorkerMessage {
    type: 'start' | 'stop' | 'reset'
    data: any
    templateData: any
}

let allData: any[] = []

function headersEqual(template: string[], actual: string[]): boolean {
    return template.length >= actual.length
      && actual.some(item => template.includes(item))
}
// Receive messages from main thread
globalThis.onmessage = async (e: MessageEvent<WorkerMessage>) => {
    switch (e.data.type) {
        case 'start':
        {
            const fileData = e.data.data
            const templateData = e.data.templateData

            const workBook = XLSX.read(fileData, { type: 'binary', cellDates: true })
            const workSheet = workBook.Sheets[workBook.SheetNames[0]]
            const excelData: object[] = XLSX.utils.sheet_to_json(workSheet)

            const templateWorkBook = XLSX.read(templateData, { type: 'array', cellDates: true })
            const templateWorkSheet = templateWorkBook.Sheets[templateWorkBook.SheetNames[0]]
            const templateExcelData: object[] = XLSX.utils.sheet_to_json(templateWorkSheet)

            const templateHeader = Object.keys(templateExcelData[0])
            const header = Object.keys(excelData[0])

            if (!headersEqual(templateHeader, header)) {
                globalThis.postMessage({
                    type: 'error',
                    data: null,
                    message: 'not right template',
                })
                return
            }
            allData = addOtherInfo(excelData)
            globalThis.postMessage({
                type: 'done',
                data: allData,
                message: 'Read completed',
            })
            break
        }
        default:
            globalThis.postMessage({
                type: 'fail',
                data: null,
                message: 'Read failed',
            })
            break
    }
}
