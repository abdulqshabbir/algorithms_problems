import { greaterThan } from './greaterThan'
test('it workds', () => {
    expect(greaterThan([10, 4, 6, 3, 5])).toStrictEqual([10, 6, 5])
})