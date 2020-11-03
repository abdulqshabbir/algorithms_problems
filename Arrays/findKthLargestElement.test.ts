import {
    findKthLargestElement,
    findKthLargestElementUsingHeap
} from './findKthLargestElement'

test('findKthLargestElement', () => {
    let input = [7, 4, 6, 3, 9, 1]
    let output = 7
    expect(findKthLargestElement(input, 2)).toEqual(output)
    expect(findKthLargestElementUsingHeap(input, 2)).toEqual(output)
})