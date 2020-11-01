/*
    Given an array of integers, check if it
    represents a min heap or not
*/

export const isMinHeap = (arr: number[], i: number = 0): boolean => {
    debugger;
    // base case: leaf nodes satisfy min-heap property
    if (i > Math.floor((arr.length - 2) / 2)) {
        return true
    }
    // recursive step: check if root <= each child and if left and right
    // subtrees also are min-heaps

    let leftSubtreeIsMinHeap =
        arr[i] <= arr[2 * i + 1] &&
        isMinHeap(arr, 2 * i + 1)

    let hasNoRightChild = 2 * i + 2 >= arr.length

    let rightSubtreeIsMinHeap =
        (hasNoRightChild) ||
        (arr[i] <= arr[2 * i + 2] &&
            isMinHeap(arr, 2 * i + 2))

    return leftSubtreeIsMinHeap && rightSubtreeIsMinHeap
}

export const isMinHeapIterative = (arr: number[]): boolean => {


    return false
}