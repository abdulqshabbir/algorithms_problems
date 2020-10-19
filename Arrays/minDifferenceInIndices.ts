/* Given two integers, find the minimum difference between
their indices in linear time and a single traversal*/

export const minDifferenceInIndices = (x: number, y: number, arr: number[]) => {
    let xIndex = arr.length
    let yIndex = arr.length
    let minDifference = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            if (differenceOfIndices(i, yIndex) < minDifference) {
                xIndex = i
                minDifference = differenceOfIndices(i, yIndex)
            }
        }
        if (arr[i] === y) {
            if (differenceOfIndices(i, xIndex) < minDifference) {
                yIndex = i
                minDifference = differenceOfIndices(i, xIndex)
            } else {
                yIndex = i
            }
        }
    }
    return minDifference
}

const differenceOfIndices =
    (xIndex: number, yIndex: number) => Math.abs(xIndex - yIndex)