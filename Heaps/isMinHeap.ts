/*
    Given an array of integers, check if it
    represents a min heap or not
*/

export const isMinHeap = (arr: number[]): boolean => {
    /*
        Min heap property: parent <= children

        Start from root and make that the parent
        Find the two children of parent
        if largerChild <= parent keep going
        if largerChild > parent return false
    */

    if (arr.length === 0) return false

    let parentIndex = 0
    let parent = arr[parentIndex]
    let maxChild = getMaxChild(parentIndex, arr)

    while (maxChild) {
        if (maxChild > parent) {
            return false
        }
    }
    return true
}
function getLeftChildIndex(index: number, arr: number[]): number | null {
    const leftChildIndex = 2 * index + 1

    const indexOutOfBounds =
        leftChildIndex >= arr.length ||
        leftChildIndex < 0

    if (indexOutOfBounds) return null

    return leftChildIndex
}
function getLeftChild(index: number, arr: number[]): number | null {

    const leftChildIndex = getLeftChildIndex(index, arr)

    if (leftChildIndex === null) {
        return null
    }
    return arr[leftChildIndex]
}
function getRightChildIndex(index: number, arr: number[]): number | null {
    const rightChildIndex = 2 * index + 2

    const indexOutOfBounds =
        rightChildIndex >= arr.length ||
        rightChildIndex < 0

    if (indexOutOfBounds) return null

    return rightChildIndex
}
function getRightChild(index: number, arr: number[]): number | null {
    const rightChildIndex = getRightChildIndex(index, arr)

    if (rightChildIndex === null) {
        return null
    }
    return arr[rightChildIndex]
}
function getMaxChild(index: number, arr: number[]): number | null {
    const leftChild = getLeftChild(index, arr)
    const rightChild = getLeftChild(index, arr)

    if (leftChild === null && rightChild === null) return null

    if (leftChild === null) return rightChild

    if (rightChild === null) return leftChild

    let maxChild = leftChild > rightChild ? leftChild : rightChild

    return maxChild
}