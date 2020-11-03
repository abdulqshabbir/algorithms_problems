import { convertArrayToMinHeap } from './convertArrayToMinHeap'

test("convert-array-to-min-heap works", () => {
    let input = [9, 4, 7, 1, -2, 6, 5]
    let result = [-2, 1, 5, 9, 4, 6, 7]
    expect(convertArrayToMinHeap(input)).toEqual(result)
})