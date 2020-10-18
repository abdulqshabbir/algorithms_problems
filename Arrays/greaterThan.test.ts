import { greaterThan, optimizedGreaterThan } from './greaterThan'
test('it works in O(n^2) time', () => {
    expect(greaterThan([10, 4, 6, 3, 5])).toStrictEqual([10, 6, 5])
})

test('it works in O(n) time', () => {
    expect(optimizedGreaterThan([10, 4, 6, 3, 5])).toStrictEqual([10, 6, 5])
})