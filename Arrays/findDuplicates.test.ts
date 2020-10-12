import { findDuplicates } from './findDuplicates'

test('returns true for duplicates', () => {
    expect(findDuplicates([1, 2, 4, 2, 5, 2], 2)).toBe(true)
})

test('returns false for no duplicates', () => {
    expect(findDuplicates([1, 2, 4, 5, 10], 2)).toBe(false)
})