import { activitySelection, Activity } from './activitySelection'

let activities: Activity[] = [
    { start: 1, end: 4 },
    { start: 3, end: 5 },
    { start: 0, end: 6 },
    { start: 5, end: 7 },
    { start: 3, end: 8 },
    { start: 5, end: 9 },
    { start: 6, end: 10 },
    { start: 8, end: 11 },
    { start: 8, end: 12 },
    { start: 2, end: 13 },
    { start: 12, end: 14 },
]

let expectedResult: Activity[] = [
    { start: 1, end: 4 },
    { start: 5, end: 7 },
    { start: 8, end: 11 },
    { start: 12, end: 14 },
]

test("activity selection works", () => {
    expect(activitySelection(activities)).toStrictEqual(expectedResult)
})
