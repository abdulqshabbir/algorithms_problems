/*
    Given a collection of activities defined by a start time
    and an end time, e.g. [2, 5], determine the maximum number
    of activities that can be performed that have no overlap

*/

export type Activity = { start: number, end: number }

export const activitySelection = (activities: Activity[]) => {
    debugger;
    let result: Activity[] = []
    activities.sort((a, b) => a.end - b.end)

    result.push(activities[0])
    let lastActivityIndex = 0

    for (let i = 0; i < activities.length; i++) {
        if (result[lastActivityIndex].end <= activities[i].start) {
            result.push(activities[i])
            lastActivityIndex++
        }
    }
    return result
}