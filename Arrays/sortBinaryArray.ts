/*  Problem 3: Given an array of integers, rearrange the array
    such that it contains positive and negative numbers at
    alternating positions.  If more positives/negatives, move them
    to the end of the array.

    e.g.
        input: [9, -3, 5, -2, -8, -6, 1, 3]
        output: [5, -2, 9, -6, 1, -8, 3, -3]
*/

export const createAlternateArray = (arr: number[]) => {
    partition(arr, 0, arr.length - 1, 0)

    let start = 0
    let end = Math.floor(arr.length / 2)

    for (let i = start; i += 2; i < arr.length) {
        swap(arr, i, end)
        end++
    }
    return arr
}

/* Problem 2: Given an array consisting of positive and negative
integers, segregate them in linear time and constant space */

export const segregateArray = (arr: number[]) => {
    partition(arr, 0, arr.length - 1, 0)
    return arr
}


/* Problem 1: Sort a binary array in linear time and constant space*/
export const sortBinaryArray = (arr: number[]) => {
    partition(arr, 0, arr.length - 1, 1)
    return arr
}

const partition = (arr: number[], start: number, end: number, pivot: number) => {
    let pIndex = start
    for (let i = start; i <= end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pIndex)
            pIndex++
        }
    }
}

const swap = (arr: number[], i: number, j: number): void => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


