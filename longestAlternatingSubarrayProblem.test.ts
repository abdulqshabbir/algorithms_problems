import { longestAlternatingSubarray } from './longestAlternatingSubarrayProblem'

test('returns an empty array when empty array is provided', () => {
    expect(longestAlternatingSubarray([])).toEqual([])
})

test('return array when one element array is provided', () => {
    expect(longestAlternatingSubarray([1])).toEqual([1])
})

test('return array when one element array is provided', () => {
    expect(longestAlternatingSubarray([1])).toEqual([1])
})