/* Given an array of integers, find an index that
divides the array into two non-empty subarrays having
equal sum */

export const equalSumPartition = (arr: number[]): number => {
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