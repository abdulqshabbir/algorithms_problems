import { equalSumPartition, optimizedEqualSumPartition } from './equalSumPartition'

test("equalSumPartition works", () => {
    expect(equalSumPartition([-1, 6, 3, 1, -2, 3, 3])).toStrictEqual(2)
})

test("optimizedEqualSumPartition works", () => {
    expect(equalSumPartition([-1, 6, 3, 1, -2, 3, 3])).toStrictEqual(2)
})

test("optimizedEqualSumPartition works for 3 element arary", () => {
    expect(equalSumPartition([1, 0, 1])).toStrictEqual(1)
})
