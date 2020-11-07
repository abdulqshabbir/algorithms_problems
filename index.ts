import { LinkedList } from './LinkedList/LinkedList'

let list = new LinkedList()
list.insertAtEnd(5)

let copy = list.copyList(list.head)
console.log('original list')
list.print()
console.log('copied list')
copy.print()

list.insertAtEnd(5)
list.insertAtEnd(6)
copy = list.copyList(list.head)
console.log('original list')
list.print()
console.log('copied list')
copy.print()

list.insertAtFront(1)
list.insertAtEnd(1)
copy = list.copyList(list.head)
console.log('original list')
list.print()
console.log('copied list')
copy.print()