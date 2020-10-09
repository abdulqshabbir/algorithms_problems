import { findDuplicates } from './findDuplicates'

// test('returns empty duplicate array', () => {
//     expect(findDuplicates([], 1)).toEqual([])
// })

// test('return one element duplicate array', () => {
//     expect(findDuplicates([1, 2, 1], 2)).toEqual([1])
// })

// test('return empty duplicate array when duplicates not within range', () => {
//     expect(findDuplicates([1, 2, 1], 1)).toEqual([])
// })

// test('returns multiple duplicates within range', () => {
//     expect(findDuplicates([1, -1, 1, -1], 3)).toEqual([1, -1, 1, -1])
// })


import { hasDuplicates } from './findDuplicates'

test('returns true for duplicates', () => {
    expect(hasDuplicates([1, 2, 2, 4, 5])).toBe(true)
})

test('returns true for multiple duplicates', () => {
    expect(hasDuplicates([1, 1, 3, 4, 4, 6])).toBe(true)
})

test('returns false for no duplicates', () => {
    expect(hasDuplicates([9, 2, 1, 4, 5])).toBe(false)
})

test('returns false for empty array', () => {
    expect(hasDuplicates([])).toBe(false)
})


import { addDuplicates } from './findDuplicates'

test('added duplicate', () => {
    expect(addDuplicates([1, 2, 1], [])).toBe([1])
})


