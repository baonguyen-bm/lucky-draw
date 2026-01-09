/**
 * Browser-side cryptographically secure shuffle (no need to specify extraction count)
 * @param array Array to be shuffled
 * @returns New shuffled array
 */
function shuffleBrowserCrypto<T>(array: T[]): T[] {
    const newArray = [...array]
    if (newArray.length <= 1)
        return newArray

    // Traverse the array, generating a random index for each round
    for (let i = newArray.length - 1; i > 0; i--) {
        // Step 1: Generate a 32-bit unsigned cryptographically secure random number (only 1 needed)
        const randomBuffer = new Uint32Array(1) // Length 1 means only 1 random number is generated
        crypto.getRandomValues(randomBuffer)

        // Step 2: Map the random number to the [0, i] range (Core: dynamically adapt to the current i range)
        const randomIndex = randomBuffer[0] % (i + 1);

        // Step 3: Swap elements
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]
    }
    return newArray
}

/**
 * @description Randomly get a specified number of elements from the source array
 * @param {Array} sourceArray Source array
 * @param {number} count Number of elements to get
 * @returns {Array} Randomly retrieved elements
 */

export function getRandomElements<T>(sourceArray: T[], count: number): T[] {
    if (count <= 0)
        return []
    if (count >= sourceArray.length) {
        return shuffleBrowserCrypto([...sourceArray])
    } // Draw all = Shuffle

    const newArray = [...sourceArray]
    const result: T[] = []

    // Extract count elements, pick a random index in each round to add to the result, then remove it from the original array
    for (let i = 0; i < count; i++) {
        const randomBuffer = new Uint32Array(1)
        crypto.getRandomValues(randomBuffer)
        const randomIndex = randomBuffer[0] % newArray.length

        // Add the selected element to the result array
        result.push(newArray[randomIndex])
        // Remove the selected element from the original array to avoid repeated selection
        newArray.splice(randomIndex, 1)
    }

    return result
}
