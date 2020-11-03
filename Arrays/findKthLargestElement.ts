import { MinHeap } from '../Heaps/MinHeap'

export const findKthLargestElement = (arr: number[], k: number) => {
    arr.sort((a, b) => a - b)
    return arr[arr.length - k]
}

export const findKthLargestElementUsingHeap = (arr: number[], k: number) => {
    debugger;
    /*
        build a min-heap using class 
        to find kth largest element, pop nodes k - 1 times and return the kth popped node
    */
    let heap = new MinHeap()

    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i], arr[i])
    }

    for (let i = 1; i < k; i++) {
        // i represents the number of times we pop min-element off min-heap    
        // since we want to return kth largest element we pop off min-heap k - 1 times
        heap.pop()
    }

    if (heap.pop() === null) return null

    return heap.pop()
}