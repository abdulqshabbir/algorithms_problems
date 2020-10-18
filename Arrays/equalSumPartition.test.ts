import { equalSumPartition } from './equalSumPartition'

test("equalSumPartition works", () => {
    expect(equalSumPartition([-1, 6, 3, 1, -2, 3, 3])).toStrictEqual(2)
})