import { MinHeap } from './Heaps/MinHeap'

let nodes = []
let keys = [1, 12, 3, 5, 10]

for (let key of keys) {
    nodes.push({ key: key, value: key })
}

let heap = new MinHeap(nodes)
heap.minHeapify(1)