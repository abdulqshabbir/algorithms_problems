export interface MinHeap {
    nodes: Node[]
}

export interface Node {
    key: number,
    value: number
}

export class MinHeap {
    constructor(nodes: Node[] = []) {
        this.nodes = nodes
    }
    public getLeftChild(index: number): Node | null {
        if ((2 * index + 1) >= this.nodes.length
            || (2 * index + 1) < 0) {
            return null
        }
        return this.nodes[2 * index + 1]
    }
    public getRightChild(index: number): Node | null {
        if ((2 * index + 2) >= this.nodes.length
            || (2 * index + 2) < 0) {
            return null
        }
        return this.nodes[2 * index + 2]
    }
    public getParent(index: number): Node | null {
        let parentIdx = Math.floor((index - 1) / 2)

        if (parentIdx < 0 || parentIdx >= this.nodes.length) {
            return null
        }
        return this.nodes[Math.floor((index - 1) / 2)]
    }
    public insert(key: number, value: number): MinHeap {
        if (this.nodes.length === 0) {
            // if heap is empty, place node at root
            this.nodes[0] = { key, value }
            return this
        } else {
            // else, place item at the bottom of heap and
            // heapify-up
            let lastIndex = this.nodes.length
            this.nodes[lastIndex] = { key, value }
            this.heapifyUp()
            return this
        }
    }
    private heapifyUp() {
        let indexOfInsertion = this.nodes.length
        let parent = this.getParent(indexOfInsertion)

        while (parent) {
            if ()
        }
    }
}