// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// const node = new Node(10);
// node.insert(5);

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // If data is less than current node's data && if the left node of this node is not null
    // then recursively call 'insert' on the left nodes with given data
    if(data < this.data && this.left) {
      this.left.insert(data);
    } 
    // If data is less than current node's data && if the left node of this node is null, then 
    // create a left node with given data
    else if(data < this.data) {
      this.left = new Node(data);
    } 
    // If data is greater than current node's data && if the right node of this node is not null
    // then recursively call 'insert' on the right nodes with given data
    else if(data > this.data && this.right) {
      this.right.insert(data);
    }
    // If data is greater than current node's data && if the right node of this node is null, then 
    // create a right node with given data
    else if(data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    // Check if current node contains data
    if(data === this.data) {
      return this; // return the entire node
    }

    // If data is less than current node's data && there is a left node, then recurse down left side
    if(data < this.data && this.left) {
      return this.left.contains(data);
    }
    // If data is greater than current node's data && there is a left right, then recurse down right side
    else if(data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null; // no node in the tree has given data
  }
}

module.exports = Node;
