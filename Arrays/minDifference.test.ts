import { minDifferenceInIndices } from './minDifferenceInIndices'

test('minDifferenceInIndices works', () => {
    expect(minDifferenceInIndices(3, 2, [1, 3, 5, 4, 8, 2, 4, 3, 6, 5])).toBe(2)
})