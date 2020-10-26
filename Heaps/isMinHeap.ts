/*
    Given an array of integers, check if it
    represents a min heap or not
*/

export const isMinHeap = (arr: number[], currentIndex: number = 0): boolean => {
    /*
        if currentNode > leftNode or currentNode > rightNode:
            return false
        
        else:
            call isMinHeap on left and right subtrees

            isMinHeap(arr, leftChildIndex)
            isMinHeap(arr, rightChildIndex)

    */
    return true
}

function isLeafIndex(index: number, arr: number[]): boolean {
    if (2 * index + 2 > arr.length) return true
    else return false
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