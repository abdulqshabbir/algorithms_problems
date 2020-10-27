/*
    Given an array of integers, check if it
    represents a min heap or not
*/

export const isMinHeap = (arr: number[], rootIndex: number = 0): boolean => {
    /*
        min-heap property:  root <= childA and childB if children exist

        base case:
            IF currentNode is leaf return true since every leaf node is a min-heap 
        recursive case:
            IF currentNode is an internalNode:
                IF currentNode > childA || currentNode > childB:
                    return false 
                ELSE
                    isMinHeap(arr, leftChildIndex)
                    isMinHeap(arr, rightChildIndex)

    */
    debugger;
    const isLeaf = isLeafNode(rootIndex, arr)
    const isInternal = isInternalNode(rootIndex, arr)
    const root = arr[rootIndex]
    const leftChild = getLeftChild(rootIndex, arr)
    const rightChild = getRightChild(rootIndex, arr)

    // base ccase
    if (isLeaf) {
        return true
    }
    // recursive step
    else {
        if (isInternal) {
            if (root > leftChild! || root > rightChild!) {
                return false
            } else {
                isMinHeap(arr, 2 * rootIndex + 1)
                isMinHeap(arr, 2 * rootIndex + 2)
            }
        }
        return false
    }
}

function isLeafNode(index: number, arr: number[]): boolean {
    if (2 * index + 2 > arr.length) return true
    return false
}

function isInternalNode(index: number, arr: number[]): boolean {
    if (2 * index + 2 <= arr.length) return true
    return false
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