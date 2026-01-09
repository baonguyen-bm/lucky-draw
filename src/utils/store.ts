// Extract which fields are present
export function extractFields(data: any) {
    const item = data[0]
    // Exclude id, x, y; include all other keys in the array
    const keys = Object.keys(item).filter(key => key !== 'id' && key !== 'x' && key !== 'y')
    if (keys.length > 0) {
    // Return array of key-value pairs
        return keys.map(key => ({ label: key, value: true }))
    }
}
