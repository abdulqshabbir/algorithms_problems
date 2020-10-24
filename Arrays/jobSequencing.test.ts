import { jobSequencingWithMaxProfit, Job } from './jobSequencing'

const jobs: Job[] = [
    { jobId: 1, deadline: 9, profit: 15 },
    { jobId: 2, deadline: 2, profit: 2 },
    { jobId: 3, deadline: 5, profit: 18 },
    { jobId: 4, deadline: 7, profit: 1 },
    { jobId: 5, deadline: 4, profit: 25 },
    { jobId: 6, deadline: 2, profit: 20 },
    { jobId: 7, deadline: 5, profit: 8 },
    { jobId: 8, deadline: 7, profit: 10 },
    { jobId: 9, deadline: 4, profit: 12 },
    { jobId: 10, deadline: 3, profit: 5 },
]

test('jobSequencing works', () => {
    expect(jobSequencingWithMaxProfit(jobs)).toBe(109)
})