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
    public getLeftChildIndex(index: number): number | null {
        if ((2 * index + 1) >= this.nodes.length
            || (2 * index + 1) < 0) {
            return null
        }
        return 2 * index + 1
    }
    public getLeftChild(index: number): Node | null {
        let leftChildIndex = this.getLeftChildIndex(index)

        if (leftChildIndex === null) return null

        return this.nodes[leftChildIndex]
    }
    public getRightChildIndex(index: number): number | null {
        if ((2 * index + 2) >= this.nodes.length
            || (2 * index + 2) < 0) {
            return null
        }
        return 2 * index + 2

    }
    public getRightChild(index: number): Node | null {
        let rightChildIndex = this.getRightChildIndex(index)

        if (rightChildIndex === null) return null

        return this.nodes[rightChildIndex]
    }
    public getMinChildIndex(index: number): number | null {
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)
        let leftChild = null
        let rightChild = null

        if (leftChildIndex !== null) leftChild = this.nodes[leftChildIndex]

        if (rightChildIndex !== null) rightChild = this.nodes[rightChildIndex]

        if (leftChild === null && rightChild === null) return null

        if (leftChild === null) return rightChildIndex

        if (rightChild === null) return leftChildIndex

        if (leftChild.key <= rightChild.key) return leftChildIndex

        else return rightChildIndex
    }
    public getParent(index: number): Node | null {
        let parentIdx = Math.floor((index - 1) / 2)

        if (parentIdx < 0 || parentIdx >= this.nodes.length) {
            return null
        }
        return this.nodes[Math.floor((index - 1) / 2)]
    }
    public getParentIndex(index: number): number | null {
        let parentIndex = Math.floor((index - 1) / 2)

        if (parentIndex < 0 || parentIndex >= this.nodes.length) return null

        return parentIndex
    }
    public insert(key: number, value: number): MinHeap {
        if (this.nodes.length === 0) {
            // if heap is empty, place node at root
            this.nodes.push({ key, value })
            return this
        } else {
            // else, place item at the bottom of heap and
            // heapify-up
            this.nodes.push({ key, value })
            this.heapifyUp()
            return this
        }
    }
    public pop(): Node | null {

        if (this.nodes.length === 0) return null

        // swap root with last child and remove
        this.swap(0, this.nodes.length - 1)
        let removed = this.nodes.pop()

        // fix the heap property
        this.heapifyDown()
        return removed ? removed : null
    }
    private heapifyDown() {
        /*
            WHILE child.key < parent.key
                swap parent with smaller of the two children
                make child the "new" parent
                recalculate child
        */
        let parentIndex = 0
        let parent = this.nodes[0]
        let minChildIndex = this.getMinChildIndex(parentIndex)

        if (minChildIndex === null) return

        let minChild = this.nodes[minChildIndex]
        while (minChild.key < parent.key) {

            if (minChildIndex === null) return

            this.swap(parentIndex, minChildIndex)
            parentIndex = minChildIndex

            minChildIndex = this.getMinChildIndex(parentIndex)
            if (minChildIndex === null) return

            minChild = this.nodes[minChildIndex]
        }
    }
    private heapifyUp() {
        let childIndex = this.nodes.length - 1
        let parentIndex = this.getParentIndex(childIndex)
        let child = this.nodes[childIndex]

        if (parentIndex === null) return;
        let parent = this.nodes[parentIndex]

        while (parent.key > child.key) {
            this.swap(parentIndex, childIndex)
            childIndex = parentIndex
            parentIndex = this.getParentIndex(childIndex)

            if (parentIndex === null) return

            child = this.nodes[childIndex]
            parent = this.nodes[parentIndex]
        }
    }
    private swap(indexA: number, indexB: number) {
        let temp = this.nodes[indexA]
        this.nodes[indexA] = this.nodes[indexB]
        this.nodes[indexB] = temp
    }
}
