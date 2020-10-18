export interface MyStackNode {
    value: number,
    next: MyStackNode | null
}

export interface MyStack {
    first: MyStackNode | null,
    last: MyStackNode | null,
    size: number
}

export class MyStackNode {
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

export class MyStack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(value: number) {
        // adds an item to the top of the stack and returns the stack's size
        let newItem = new MyStackNode(value)
        if (this.size === 0) {
            this.first = newItem
            this.last = newItem
        } else {
            newItem.next = this.first
            this.first = newItem
        }
        this.size++
        return this.size
    }
    empty() {
        return this.size === 0
    }
    peek() {
        return this.first

    }
    pop() {
        // removes an item from the top of the stack and returns that item
        if (this.size === 0) {
            return null
        } else {
            let poppedItem = this.first
            if (this.size === 1 || poppedItem === null) {
                this.first = null
                this.last = null
            } else {
                this.first = poppedItem.next
                poppedItem.next = null
            }
            this.size--
            return poppedItem!.value
        }
    }
}