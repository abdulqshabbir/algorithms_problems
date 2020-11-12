import { LinkedList } from './LinkedList'

test('array of numbers can be turned into a linked list', () => {
    let arr1: number[] = []
    let arr2: number[] = [1]
    let arr3: number[] = [1, 4, 9]

    let list1 = new LinkedList()
    list1.constructList(arr1)

    let list2 = new LinkedList()
    list2.constructList(arr2)

    let list3 = new LinkedList()
    list3.constructList(arr3)

    expect(list1.convertToArray()).toEqual(arr1)
    expect(list2.convertToArray()).toEqual(arr2)
    expect(list3.convertToArray()).toEqual(arr3)
})

test('LinkedList.insertAtFront works', () => {
    let list = new LinkedList()
    expect(list.convertToArray()).toEqual([])

    list.insertAtFront(1)
    expect(list.convertToArray()).toEqual([1])

    list.insertAtFront(2)
    expect(list.convertToArray()).toEqual([2, 1])

    list.insertAtFront(4)
    expect(list.convertToArray()).toEqual([4, 2, 1])
})

test('LinkedList.insertAtEnd works', () => {
    let list = new LinkedList()
    expect(list.convertToArray()).toEqual([])

    list.insertAtEnd(1)
    expect(list.convertToArray()).toEqual([1])

    list.insertAtEnd(2)
    expect(list.convertToArray()).toEqual([1, 2])

    list.insertAtEnd(4)
    expect(list.convertToArray()).toEqual([1, 2, 4])
})

test('LinkedList.removeFromFront works', () => {
})