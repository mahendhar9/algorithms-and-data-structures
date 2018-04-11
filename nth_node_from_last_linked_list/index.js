// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  // Move fast by 'n' nodes
  while(n > 0) {
    fast = fast.next;
    n--;
  }

  // Move slow and fast by 1 node until fast.next is null
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow is 'n' spaces behind fast.
  return slow;
}

module.exports = fromLast;
