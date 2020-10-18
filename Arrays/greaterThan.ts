import { MyStack, MyStackNode } from '../Stacks/Stack'


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

export function optimizedGreaterThan(arr: number[]) {
    // input: [10, 4, 6, 3, 5] 
    let MAX_SO_FAR = -Infinity
    let result = []
    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] > MAX_SO_FAR) {
            result.unshift(arr[i])
            MAX_SO_FAR = arr[i]
        }
    }
    return result
}