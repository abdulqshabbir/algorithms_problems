import { findMissingElement } from './findMissingElement'

test('find missing element works', () => {
    expect(findMissingElement([1, 3, 4])).toBe(2)
})

test('find missing element returns null for empty array', () => {
    expect(findMissingElement([])).toBe(null)
})

test('find missing element works for one element array', () => {
    expect(findMissingElement([2])).toBe(1)
})