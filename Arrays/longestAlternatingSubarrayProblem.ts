/*
    Longest Alternating Subarray problem:

    Find longest alternating (positive and negative)
    subarray
*/

export function longestAlternatingSubarray(arr: number[]) {
    let left: number = 0, right: number = 0
    let leftMax: number = 0, rightMax: number = 0
    let maxSubarrayLength: number = 0

    for (let i = 0; i < arr.length; i++) {
        if (nextElementAlternates(i, arr)) {
            // next element alternates so check for potential longest substring
            right++
            if (right - left > maxSubarrayLength) {
                maxSubarrayLength = right - left
                leftMax = left
                rightMax = right
            }
        } else {
            // next element does not alternate so reset left/right pointers
            left = i + 1
            right = i + 1
        }
    }

    return arr.slice(leftMax, rightMax + 1)
}

export function nextElementAlternates(index: number, arr: number[]) {
    // index out of bounds
    if (index < 0 || index > arr.length - 2) return false

    // check if element alternates
    let isCurrentNeg: boolean = arr[index] < 0 ? true : false
    let isNextNeg: boolean = arr[index + 1] < 0 ? true : false

    if (isCurrentNeg !== isNextNeg) {
        // opposite signs
        return true
    }
    else {
        return false
    }
}