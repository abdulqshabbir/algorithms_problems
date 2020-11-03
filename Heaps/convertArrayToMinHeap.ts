import { MinHeap } from './MinHeap'

// convert an array into a min-heap in O(n) time
export const convertArrayToMinHeap = (arr: number[]) => {
    let heap = new MinHeap()
    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i], arr[i])
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(heap.nodes[i].value)
    }
    return result
}