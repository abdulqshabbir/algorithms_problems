export interface MinHeap {
    nodes: Node<number>[]
}

export interface Node<T> {
    key: number,
    value: T
}

export class MinHeap {
    constructor(nodes: Node<number>[]) {
        this.nodes = nodes
    }
    public getLeftChild(index: number) {
        return 2 * index + 1
    }
    public getRightChild(index: number) {
        return 2 * index + 2
    }
    public getParent(index: number) {
        return Math.floor((index - 1) / 2)
    }
}