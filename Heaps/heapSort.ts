import { MinHeap } from './MinHeap'

export const heapSort = (arr: number[]) => {
    let heap = new MinHeap()
    let sorted = []
    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i], arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        let popped = heap.pop()
        if (popped !== null) {
            sorted.push(popped.value)
        }
    }
    return sorted
}