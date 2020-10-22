/* Given a distinct integer array, replace each
element with its corresponding rank in the array.
e.g. [10, 8, 15, 12, 6, 20, 1] -> [4, 3, 6, 5, 2, 7, 1]
*/

import { MinHeap } from "../Heaps/MinHeap"

export const replaceWithRank = (arr: number[]) => {
    let sorted = arr.slice().sort((a, b) => a - b)
    let map = new Map()
    for (let i = 0; i < sorted.length; i++) {
        map.set(sorted[i], i + 1)
    }
    return arr.map(e => {
        const rank = map.get(e)
        return rank
    })
}