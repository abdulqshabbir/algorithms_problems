import { LinkedList } from './LinkedList/LinkedList'

let list = new LinkedList()
list.insertAtEnd(1)
list.insertAtEnd(4)
list.insertAtEnd(9)
list.insertAtEnd(16)
list.print()
list.insertDataInSortedPosition(0)
list.print()
list.insertDataInSortedPosition(5)
list.print()
list.insertDataInSortedPosition(25)
list.print()