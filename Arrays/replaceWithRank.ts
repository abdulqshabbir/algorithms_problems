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

export const replaceWithRankUsingHeap = (arr: number[]) => {
    /*
        FOR each i from 0 to N - 1:
            insert arr[i] into min heap with key being arr[i] and value being i (each insertion takes O(logn))


        let transformedArr = new Array(arr.length)
        
        FOR each i from 0 to N -1;
            pop off min heap -> {key: entry, value: index}
            use popped node to index into transformedArr and set rank -> transformedArr[popped.value] = i + 1
    */
    let heap = new MinHeap()

    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i], i)
    }

    let transformedArr = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        let poppedNode = heap.pop()

        if (poppedNode !== null) {
            let rank = i + 1
            let index = poppedNode.value
            transformedArr[index] = rank
        }
    }
    return transformedArr
}