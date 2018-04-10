// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.getFirst(); //list.head
  let fast = list.getFirst(); //list.head

  while(fast.next && fast.next.next) {
    // slow variable moves by one node
    slow = slow.next;
    // fast variable moves by two nodes
    fast = fast.next.next;
  }

  // Since fast variable is travelling at twice the speed of 'slow', by the time 'fast' has reached the end of the list (*if list has odd number of nodes*. If even nodes, 'fast' would have reached list[size-1]), 'slow' would have reached the midpoint
  return slow;
}

module.exports = midpoint;
