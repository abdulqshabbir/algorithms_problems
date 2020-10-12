/*
    Given an array and a positive number k, check if there are any duplicate elements
    within range k.

    If there are, return true.
    If not, return false.

    Example: [1, 2, 3, 4, 2] should return true if k = 3
*/

/* Sol */

export function findDuplicates(array: number[], k: number) {
    // create map which maps array element (key) to array index (value)
    let map = new Map()

    for (let i = 0; i < array.length; i++) {
        // if map alreay has entry
        if (map.has(array[i])) {

            // check if entry index is within 'k' indices away from i
            if (i - map.get(array[i]) <= k) {
                return true
            }
        }
        // for each entry in array, if entry is not in map store it
        if (!map.has(array[i])) {
            map.set(array[i], i)
        }
    }
    return false
}