export interface Node {
    data: number,
    next: Node | null
}
export class Node {
    constructor(data: number) {
        this.data = data
        this.next = null
    }
}

export interface LinkedList {
    head: Node | null
}

export class LinkedList {
    constructor() {
        this.head = null
    }
    constructList(data: number[]) {
        let N = data.length
        let rest = null

        for (let i = N - 1; i >= 0; i--) {
            if (this.head === null) {
                this.head = new Node(data[i])
                continue
            }
            // rest of linked list
            rest = this.head
            this.head = new Node(data[i])
            this.head.next = rest
        }
        return this.head
    }
    copyList(head: Node | null): LinkedList {
        let copyList = new LinkedList()
        let current = head
        if (current === null) {
            return copyList
        }
        while (current.next !== null) {
            copyList.insertAtEnd(current.data)
            current = current.next
        }
        copyList.insertAtEnd(current.data)
        return copyList
    }
    insertAtFront(data: number) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            return this.head
        }
        let rest = this.head
        this.head = newNode
        newNode.next = rest
        return this.head
    }
    insertAtEnd(data: number) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            return this.head
        }
        let current = this.head

        // traverse to last node and set its next pointer to the newNode
        while (current.next !== null) {
            current = current.next
        }
        current.next = newNode

        return this.head
    }
    removeFromFront(): number | null {
        // takes a non-empty list, deletes head node and returns the head node's data
        if (this.head === null) {
            return null
        }
        let rest = this.head.next // reference for rest of list
        let head = this.head // reference to "old" head
        this.head = rest
        head.next = null // prevent rest of linked list from being accesssed
        return head.data
    }
    insertDataInSortedPosition(data: number) {
        // pre-condition: linked list is already in sorted order
        // head -> 1 -> 4 -> 9 -> null
        // newNode: 5
        // 
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        }
        let current = this.head
        let prev = null
        while (current.next && newNode.data > current.data) {
            if (prev === null) {
                prev = this.head
            } else {
                prev = prev.next
            }
            current = current.next
        }
        if (current.next === null) {
            this.insertAtEnd(newNode.data)
            return this
        }
        if (prev === null) {
            this.insertAtFront(newNode.data)
            return this
        }
        else {
            let rest = current
            prev.next = newNode
            newNode.next = rest
            return this
        }
    }
    print() {
        let current = this.head
        let result = ''
        if (current === null) {
            result = 'head'
        } else {
            result = `head -> ${current.data}`
        }
        while (current && current.next !== null) {
            current = current.next
            result += ` -> ${current.data}`
        }
        result += ' -> null'
        console.log(result)
        return result
    }
}
