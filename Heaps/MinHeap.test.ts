import { MinHeap } from './MinHeap'

test('getLeftChild works', () => {
    let heap = new MinHeap(
        [
            { key: 1, value: 1 },
            { key: 3, value: 3 },
            { key: 5, value: 5 }
        ])
    expect(heap.getLeftChild(0)).toEqual({ key: 3, value: 3 })
    expect(heap.getLeftChild(2)).toEqual(null)
    expect(heap.getLeftChild(3)).toEqual(null)
})

test('getRightChild works', () => {
    let heap = new MinHeap(
        [
            { key: 1, value: 1 },
            { key: 3, value: 3 },
            { key: 5, value: 5 }
        ])
    expect(heap.getRightChild(0)).toEqual({ key: 5, value: 5 })
    expect(heap.getRightChild(2)).toEqual(null)
    expect(heap.getRightChild(3)).toEqual(null)
})

test('getParentIndex works', () => {
    let heap = new MinHeap(
        [
            { key: 1, value: 1 },
            { key: 3, value: 3 },
            { key: 5, value: 5 }
        ])
    expect(heap.getParentIndex(1)).toEqual(0)
    expect(heap.getParentIndex(2)).toEqual(0)
    expect(heap.getParentIndex(0)).toEqual(null)
})

test('getParent works', () => {
    let heap = new MinHeap(
        [
            { key: 1, value: 1 },
            { key: 3, value: 3 },
            { key: 5, value: 5 }
        ])
    expect(heap.getParent(1)).toEqual({ key: 1, value: 1 })
    expect(heap.getParent(2)).toEqual({ key: 1, value: 1 })
    expect(heap.getParent(0)).toEqual(null)
})

test('insert works', () => {
    let heap = new MinHeap()

    heap.insert(3, 3)
    expect(heap.nodes.length).toBe(1)
    expect(heap.nodes[0]).toEqual({ key: 3, value: 3 })

    heap.insert(1, 1)
    expect(heap.nodes.length).toBe(2)
    expect(heap.nodes[0]).toEqual({ key: 1, value: 1 })
    expect(heap.nodes[1]).toEqual({ key: 3, value: 3 })
})

test('delete works', () => {
    let heap = new MinHeap()

    heap.insert(3, 3)
    expect(heap.nodes.length).toBe(1)
    expect(heap.nodes[0]).toEqual({ key: 3, value: 3 })

    heap.insert(1, 1)
    expect(heap.nodes.length).toBe(2)
    expect(heap.nodes[0]).toEqual({ key: 1, value: 1 })
    expect(heap.nodes[1]).toEqual({ key: 3, value: 3 })

    heap.insert(2, 2)
    expect(heap.nodes.length).toBe(3)
    expect(heap.nodes[0]).toEqual({ key: 1, value: 1 })
    expect(heap.nodes[1]).toEqual({ key: 3, value: 3 })
    expect(heap.nodes[2]).toEqual({ key: 2, value: 2 })

    heap.pop()
    expect(heap.nodes.length).toBe(2)
    expect(heap.nodes[0]).toEqual({ key: 2, value: 2 })
    expect(heap.nodes[1]).toEqual({ key: 3, value: 3 })

    heap.pop()
    expect(heap.nodes.length).toBe(1)
    expect(heap.nodes[0]).toEqual({ key: 3, value: 3 })

    heap.pop()
    expect(heap.nodes.length).toBe(0)
    expect(heap.nodes).toEqual([])
})

test('minHeapify works when one exchange is needed', () => {
    let nodes = []
    let keys = [1, 12, 3, 5, 10]

    let expectedNodes = []
    let expectedKeys = [1, 5, 3, 12, 10]

    for (let key of keys) {
        nodes.push({ key: key, value: key })
    }

    for (let key of expectedKeys) {
        expectedNodes.push({ key: key, value: key })
    }

    let heap = new MinHeap(nodes)

    expect(heap.minHeapify(1)).toEqual(expectedNodes)
})

test('minHeap works for more than one exchange', () => {
    let nodes = []
    let keys: number[] = [1, 12, 3, 5, 10, 4, 5, 6]

    let expectedNodes = []
    let expectedKeys: number[] = [1, 5, 3, 6, 10, 4, 5, 12]

    for (let key of keys) {
        nodes.push({ key: key, value: key })
    }

    for (let key of expectedKeys) {
        expectedNodes.push({ key: key, value: key })
    }

    let heap = new MinHeap(nodes)
    expect(heap.minHeapify(1)).toEqual(expectedNodes)
})