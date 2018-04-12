// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // Left                                 // Right
  if((max !== null && node.data > max) || (min !== null && node.data < min)) {
    return false;
  } 
  
  if(node.left) {
    return validate(node.left, min, node.data); // When moving left, update 'max' value | (left node, min, current node value)
  }

  if(node.right) {
    return validate(node.right, node.data, max); // When moving right, update 'min' value | (right node, current node value, max)
  }

  return true;
}

module.exports = validate;
