import { replaceWithRank, replaceWithRankUsingHeap } from './replaceWithRank'

test('replaceWithRank works', () => {
    expect(replaceWithRank([10, 8, 15, 12, 6, 20, 1])).toEqual([4, 3, 6, 5, 2, 7, 1])
})

test('replaceWithRankUsingHeap works', () => {
    expect(replaceWithRankUsingHeap([10, 8, 15, 12, 6, 20, 1])).toEqual([4, 3, 6, 5, 2, 7, 1])
})