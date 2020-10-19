/* OPTIMIZECD SOLUTION: Given an array of integers, find an index that
divides the array into two non-empty subarrays having
equal sum */

/* Preprocess the array by finding the sum of all elements. Then, for
each partitionIndex (i) from 1..N-1, slowly build-up the leftSum
by adding A[i] each time and find the rightSum by using the formula
rightSum = totalSum - leftSum - A[i]. If leftSum === rightSum, return i.*/


export const optimizedEqualSumPartition = (arr: number[]): number | null => {
    let totalSum = 0
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }

    let leftSum = arr[0]
    let rightSum

    for (let pIndex = 1; pIndex < arr.length - 1; pIndex++) {
        rightSum = totalSum - leftSum - arr[pIndex]
        if (leftSum === rightSum) return pIndex
        leftSum += arr[pIndex]
    }
    return null
}
/* NAIVE SOLUTION: Given an array of integers, find an index that
divides the array into two non-empty subarrays having
equal sum */

export const equalSumPartition = (arr: number[]): number | undefined => {
    let leftSum = 0
    let rightSum = 0

    for (let pIndex = 1; pIndex < arr.length - 1; pIndex++) {
        leftSum = 0
        rightSum = 0

        for (let i = 0; i < pIndex; i++) {
            leftSum += arr[i]
        }
        for (let j = pIndex + 1; j < arr.length; j++) {
            rightSum += arr[j]
        }

        if (leftSum === rightSum) {
            return pIndex
        }
    }
}