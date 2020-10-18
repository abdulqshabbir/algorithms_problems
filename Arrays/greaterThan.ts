/*
    Given an unsorted array of integers, print all elements which are
    greater than all elements to the right of that element

    Example input: [10, 4, 6, 3, 5]
    Exampe output: [10, 6, 5]
*/

/*
    Naive solution:

    let result = []

    FOR each i from 0 to N - 2:
        FOR each j from i + 1 to N - 1;
            if (arr[j] >= arr[i]) break;
        
        result.push[arr[i]]
*/

export function greaterThan(arr: number[]) {
    // input: [10, 4, 6, 3, 5] 
    const result = []
    outerloop:
    for (let i = 0; i < arr.length - 1; i++) {
        innerloop:
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= arr[i]) {
                // if larger/equal element found later move i pointer to next element
                break innerloop;
            }
            if (j === arr.length - 1) {
                // if j pointer reaches the end, push current arr[i] value onto result
                result.push(arr[i])
            }
        }
        if (i === arr.length - 2) {
            // once i pointer reaches second last element, 
            // add last element onto the array
            result.push(arr[i + 1])
        }
    }
    return result
}