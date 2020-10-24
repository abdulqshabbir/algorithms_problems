/* Given a set of tasks with deadlines and total profit earned on 
completion of a task, find maximum profit earned by executing the
tasks within the specified deadlines.  Assume any task will take one
unit of time to execute and no task can be executed beyond its deadline.
Only one task can be executed at a time.
*/

export interface Job {
    jobId: number,
    deadline: number,
    profit: number
}

export const jobSequencingWithMaxProfit = (jobs: Job[]) => {
    debugger;
    // Jobs that maximize profit
    let optimalJobs: Job[] = []

    /*
        Tracks if timeslot is free
        timeSlotAvail will use the end of each time slot as a key
            e.g. the 0-1 open time slot will be represented as 1 -> true
            e.g. the 5-6 closed time slot will be respresented as 5 -> false
    */
    let timeSlotAvailability = new Map<number, boolean>()

    jobs.sort((a, b) => b.profit - a.profit)

    for (let i = 0; i < jobs.length; i++) {
        let deadline = jobs[i].deadline
        for (let t = deadline; t > 0; t--) {
            if (!timeSlotAvailability.has(t)) {
                timeSlotAvailability.set(t, true)
            }
            if (timeSlotAvailability.get(t)) {
                optimalJobs.push(jobs[i])
                timeSlotAvailability.set(t, false)
                break;
            }
        }
    }

    let maxProfit = 0

    optimalJobs.forEach(j => {
        maxProfit += j.profit
    })

    return maxProfit
}