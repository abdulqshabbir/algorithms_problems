import { isMinHeap } from './isMinHeap'

test('isMinHeap works', () => {
    expect(isMinHeap([2, 3, 4, 5, 10, 15])).toBe(true)
    expect(isMinHeap([2, 10, 4, 5, 3, 15])).toBe(false)
})