class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      if(!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    //If the Linked List in empty
    if(!this.head) {
      return;
    }

    //If there's only one node in the Linked List
    if(!this.head.next) {
      this.head = null;
      return;
    }

    //If there are more than one nodes
    let previous = this.head;
    let node = this.head.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if(last) {
      // Linked List is not empty
      last.next = new Node(data);
    } else {
      // Linked list is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while(node) {
      if(counter === index) {
        return node;
      }

      counter++;
      node = node.next
    }
    // If linked list is empty i.e, this.head is null, while loop is never entered and so returns null
    // If the index provided is greater than the number of nodes, returns null.
    return null;
  }

  removeAt(index) {
    // If the Linked List is empty
    if(!this.head) {
      return;
    }

    // If asked to remove first node
    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    // If the index is out of bound or if 'previous' is the last node
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;

    // Alternative
    //------------------
    // if(previous) {
    //   previous.next = previous.next && previous.next.next;
    // }
  }

  insertAt(data, index) {
    // If list is empty, point the head to the new node
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    // If asked to insert at index 0, point the head to the new node and new node to the current head.
    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // If the index is out of bound, insert at last
    const previous = this.getAt(index - 1) || this.getLast();
    // Create new node with given data and point it to previous's next node
    const node = new Node(data, previous.next);
    // Point the previous node to the new node
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };