export function findDuplicates(arr: number[], k: number) {
    let duplicates: number[] = []

    return duplicates
}

export function hasDuplicates(subArr: number[]) {
    let map = new Map()

    for (let i = 0; i < subArr.length; i++) {
        if (map.get(subArr[i])) {
            return true
        }
        map.set(subArr[i], 1)
    }
    return false
}

export function addDuplicates(subArray: number[], duplicates: number[]) {
    let map = new Map<number, number>()

    for (let i = 0; i < subArray.length; i++) {
        if (map.get(subArray[i])) {
            map.set(subArray[i], map.get(subArray[i])! + 1)
        }
        map.set(subArray[i], 1)
    }

    for (let key of map.keys()) {
        if (map.get(key)! > 1) {
            duplicates.push(key)
        }
    }

    return duplicates
}

/*
    [1, 2, 3, 1, 5], k = 3
     s
     e

     i   s    e
     0   0    0
     1   0    1
     2   0    2
     3   0    3

    let duplicates: number[] be an array of duplicates found
    let start: number be the index of the start of range
    let end: number be the index of the end of the range
    let k: range to search duplicates within.  k > 0

    start = 0
    end   = 0

    FOR end from 0 to N - 1:
        if (end - start > k) {
            start++
        }
        end++
        hasDuplicates(subArray, duplicates)


    function addDuplicates(subArry, duplicates) {
        let map = {}
        FOR i from 0 to M - 1:
            if (map[subarr[i]]) {
                map[subarr[i]] += 1
            }
            map[subarr[i]] = 1

        for (key in map) {
            if key not in duplicates:
                duplicates.push(key)
        }
    }


*/