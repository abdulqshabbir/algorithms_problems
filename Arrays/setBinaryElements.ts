/*
    Given a binary array of size 2 with at least one element
    guaranteed to be 0, write a single line function to set both
    of its elements to zero.
*/

export const setBinaryElements = (arr: number[]) => {
    arr[0] = arr[1] = arr[0] && arr[1]
    return arr
}
