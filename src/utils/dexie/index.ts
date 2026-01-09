import type { EntityTable } from 'dexie'
import type { DbData } from './type'
import dayjs from 'dayjs'
import Dexie from 'dexie'

class IndexDb {
    name: string
    dbStore: any
    version: number
    dbKeys: string[]
    tableNames: string[]
    constructor(name: string, tableNames: string[], version = 1, dbKeys: string[] = []) {
        this.name = name // Database name
        this.version = version // Database version number
        this.dbKeys = dbKeys // Database keys
        this.tableNames = tableNames
        this.dbStore = new Dexie(name) as Dexie & { [key: string]: EntityTable<DbData, 'id'> }
        // Get existing keys
        const stores: Record<string, string> = {}
        for (const tableName of tableNames) {
            stores[tableName] = `id,dateTime,type,uid,${dbKeys.join(',')}` // Adjust fields as needed
        }
        this.dbStore.version(this.version).stores(stores)
    }

    setAllData(tableName: string, data: DbData[]) {
        this.dbStore[tableName].bulkAdd(data)
    }

    /**
     * @param data
     * @description Add a single data item and add dateTime and type properties to it
     */
    setData(tableName: string, data: Partial<DbData>) {
        if (!data.dateTime) {
            data.dateTime = dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')
        }
        if (!data.type) {
            data.type = 'info'
        }
        this.dbStore[tableName].add(data)
    }

    // Update single data item
    updateData(tableName: string, data: Partial<DbData>) {
        this.dbStore[tableName].update(data.id, data)
    }

    /**
     * @returns All data Array
     * @description Delete all data and return the deleted data
     */
    deleteAll(tableName: string) {
        return this.dbStore[tableName].clear()
    }

    /**
     * @param data
     * @description Delete a single data item
     */
    deleteData(tableName: string, data: Partial<DbData>) {
        this.dbStore[tableName].delete(data.id)
    }

    /**
     * @returns All data Array
     * @description Get all data
     */
    async getAllData(tableName: string, isAsc: boolean = true) {
        const allData = await this.dbStore[tableName].toArray()
        // return allData
        return isAsc ? allData : allData.reverse()
    }

    // Get all data sorted by dateTime
    async getDataSortedByDateTime(tableName: string, orderTimeName: string = 'dataTime') {
        const allData = await this.dbStore[tableName].orderBy(orderTimeName).toArray()
        return allData
    }

    // Get paginated data
    async getPageData(tableName: string, pageNum: number, pageSize: number, isAsc: boolean = true) {
        const allData = await this.dbStore[tableName].toArray()
        const start = (pageNum - 1) * pageSize
        const end = pageNum * pageSize
        return isAsc ? allData.slice(start, end) : allData.slice(end, start).reverse()
    }

    /**
     * @returns Total length of the database
     * @description Get the list length of all data
     */
    getAllLength(tableName: string) {
        return this.dbStore[tableName].count()
    }

    /**
     *
     * @param filter Return data based on filter criteria
     * @returns
     */
    getFilterData(tableName: string, filter: string) {
        return this.dbStore[tableName].filter((item: any) => {
            return item.content.includes(filter)
        }).toArray()
    }

    getKeys(tableName: string, key: string) {
        // keys method gets all primary keys
        return this.dbStore[tableName].orderBy(key).keys()
    }
}

export { IndexDb }
