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
    /*
        FOR each node from i = n/2 + 1 to 0:
            if leaf node do nothing
            if rightchildexists:
                check if left and right child >= arr[i]
                    if not return false
            else:
                check if left child >= arr[i]
                    if not return false

        return true
    */
    let N = arr.length
    for (let i = Math.floor(N / 2) + 1; i >= 0; i--) {
        let rightChildExists = 2 * i + 2 < N

        if (i > Math.floor((N - 2) / 2)) {
            continue
        }
        if (rightChildExists) {
            if (arr[i] > arr[2 * i + 1] || arr[i] > arr[2 * i + 2]) {
                return false
            }
        }
        if (arr[i] > arr[2 * i + 1]) {
            return false
        }
    }
    return true
}