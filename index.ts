import { LinkedList } from './LinkedList/LinkedList'

let list = new LinkedList()
console.log(list.convertToArray())
list.insertAtEnd(1)
console.log(list.convertToArray())
list.insertAtEnd(4)
list.insertAtEnd(9)
list.insertAtEnd(16)
list.removeFromFront()
console.log(list.convertToArray())