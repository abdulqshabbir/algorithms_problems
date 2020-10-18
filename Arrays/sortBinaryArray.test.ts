import { sortBinaryArray } from './sortBinaryArray'

test('sortBinaryArray works', () => {
    expect(sortBinaryArray([0, 1, 0, 0, 1, 1])).toStrictEqual([0, 0, 0, 1, 1, 1])
})

test('sortBinaryArray works', () => {
    expect(sortBinaryArray([0, 1, 0, 0, 1, 0])).toStrictEqual([0, 0, 0, 0, 1, 1])
})

test('sortBinaryArray works for two element array', () => {
    expect(sortBinaryArray([1, 0])).toStrictEqual([0, 1])
})

test('sortBinaryArray works for one element array', () => {
    expect(sortBinaryArray([0])).toStrictEqual([0])
})

import { segregateArray } from './sortBinaryArray'

test('segretateArray works', () => {
    expect(segregateArray([9, -3, 5, -2, -8, -6, 1, 3])).toStrictEqual([-3, -2, -8, -6, 5, 9, 1, 3])
})