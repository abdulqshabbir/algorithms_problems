export const findMissingElement = (arr: number[]) => {
    /*
        Given an array of size n
        where the array contains elements
        between 1 to n + 1 with no repeitions
        and one element missing,
        find the missing element with O(1) space 
    */
    let N = arr.length
    if (N === 0) return null

    let ACTUAL_SUM = ((1 + N + 1) * (N + 1)) / 2
    let ARRAY_SUM = 0

    for (let i = 0; i < arr.length; i++) {
        ARRAY_SUM += arr[i]
    }

    return ACTUAL_SUM - ARRAY_SUM
}