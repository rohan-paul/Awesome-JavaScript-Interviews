/* https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/

A program to check if a binary tree is BST or not

A binary search tree (BST) is a node based binary tree data structure which has the following properties.
• The left subtree of a node contains only nodes with keys less than the node’s key.
• The right subtree of a node contains only nodes with keys greater than the node’s key.
• Both the left and right subtrees must also be binary search trees.

From the above properties it naturally follows that:
• Each node (item in the tree) has a distinct key.

So, in another word - Binary tree is a tree data structure in which each node has at most two child nodes.

A binary search tree (BST) is a rooted binary tree, whose internal nodes each store a key and each have two distinguished sub-trees, commonly denoted left and right.
– The tree additionally satisfies the binary search tree property, which states that the key in each node must be greater than all keys stored in the left sub-tree, and smaller than all keys in right sub-tree.

*/

/* SOLUTION - Traverse the tree in-order. Compare the current element with the previous element
Note: This approach can not detect duplicates. We will assume all nodes in the tree have unique values. */

function BinaryTree () {
  this.root = null;
}

// Variable to hold the data of the last node
let last_logged;

function isBST (root) {

  // base case
  if (root === null) {
    return true;
  }

  // verify and recurse left
  if (!isBST(root.left)) {
    return false;
  }

  // verify the current node.
  if (last_logged !== null && root.data <= last_logged) {
    return false;
  }

  // Console.log the current data for debugging and also update the last_logged value with the current node's value
  console.log('Current node : ', root.data);
  last_logged = root.data;

  // verify and recurse right
  if (!isBST(root.right)) {
    return false
  }

  // If none of the false is encountered above, then finally return true.
  return true;

}

// Test case- Create a Binary Tree as a sample input

var root = {
  data : 8,
  left : null,
  right : null
};
var n1 = {
  data : 10,
  left : null,
  right : null
};

var n2 = {
  data : 6,
  left : null,
  right : null
};

let BT = new BinaryTree();
BT.root = root;

// Create a binary search tree
root.left = n2;
root.right = n1;

console.log(isBST(BT.root));