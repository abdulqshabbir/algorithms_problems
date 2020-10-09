import { longestAlternatingSubarray } from './longestAlternatingSubarrayProblem'

test('returns empty array', () => {
    expect(longestAlternatingSubarray([])).toEqual([])
})

test('return one element array', () => {
    expect(longestAlternatingSubarray([1])).toEqual([1])
})

test('return longest subarray', () => {
    expect(longestAlternatingSubarray([1, -1, 1, 1])).toEqual([1, -1, 1])
})

test('return longest subarray when it is the array itself', () => {
    expect(longestAlternatingSubarray([1, -1, 1, -1])).toEqual([1, -1, 1, -1])
})