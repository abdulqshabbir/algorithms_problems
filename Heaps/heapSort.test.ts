import { heapSort } from './heapSort'

const unsorted = [6, 4, 7, 1, 9, -2]
const sorted = [-2, 1, 4, 6, 7, 9]

test('heap sort works', () => {
    expect(heapSort(unsorted)).toEqual(sorted)
})