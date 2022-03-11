'use strict';
/**
 * @fileOverview Module implementing a binary search tree and basic traversal functions
 * @author Sebastian Krajnak
 */

/**
 * Constructor representing a binary tree as a whole with one root node and a comparator function passed as an argument. 
 * A BST is composed of several nodes which are created and added to the root node and it's children. When initiated the
 * root value is set to null and awaits for an insertion of the first value. Each tree stores it's own comparator function.
 * 
 * @constructor
 * @param {function} comparator comparator function used to determine which side of the tree will the new value be stored in
 */
export function Tree (comparator) {
    this.root = null;
    this.comparator = comparator;
}

/**
 * Separate nodes of a BST, each node when initiated has a value that is passed as an arguement during it's initiation,
 * both left and right children are set to null until further insertion.
 * 
 * @constructor
 * @param {number|string} value new value to be inserted into the tree
 */
function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/**
 * Inserts a new Node with value at input into the tree. Function first checks if a tree already exists, if not
 * a tree is created, it's root is set as said Node. If a tree already exists, function compares existing Node's value
 * with input value and based on the comparator function either creates a new Node with input value as either left or right child
 * or recursively moves down the children of existing Node. 
 * Starts in root.
 * 
 * @function
 * @param {number|string} value 
 */
Tree.prototype.insertValue = function (value) {
    var nodeNew = new Node(value);

    /**
     * 
     * @param {*} newNode 
     * @param {*} node 
     * @param {*} compareFunc 
     */
    const recursiveInsert = (newNode, node, compareFunc) => {
        if (compareFunc(newNode.value, node.value)) {
            if (node.left === null)
                node.left = newNode;
            else
                recursiveInsert(newNode, node.left, compareFunc)
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                recursiveInsert(newNode, node.right, compareFunc);
        }
    }

    if(this.root === null){
        this.root = nodeNew;
    }
    else{
        recursiveInsert(nodeNew, this.root, this.comparator);
    }
}

/**
 * Generator function, returns iterator over all node values. Traverses the BST in order: 
 * each node will first have it's left subtree visted, then it's root
 * and lastly it's right subtree.
 * 
 * left subtree -> root -> right subtree
 * 
 * Results in values sorted in an ascending order.
 * 
 * @generator
 * @param {Node} node node where to start the traversal, tree root by default
 * @yields {number|string} iterator containing all values stored in the tree
 */
Tree.prototype.inorder = function* (node = this.root) {
    if (node.left != null) yield* this.inorder(node.left);
    yield node.value;
    if (node.right != null) yield* this.inorder(node.right);
}

/**
 * Generator function, returns iterator over all node values. Traverses the BST pre order: 
 * each node will first have it's root visted, then it's left subtree
 * and lastly it's right subtree.
 * 
 * root -> left subtree -> right subtree
 * 
 * @generator
 * @param {Node} node node where to start the traversal, tree root by default
 * @yields {number|string} iterator containing all values stored in the tree
 */
Tree.prototype.preorder = function* (node = this.root) {
    yield node.value;
    if (node.left != null) yield* this.preorder(node.left);
    if (node.right != null) yield* this.preorder(node.right);
}

/**
 * Generator function, returns iterator over all node values. Traverses the BST post order: 
 * each node will first have it's left subtree visted, then it's right subtree
 * and lastly it's root.
 * 
 * left subtree -> right subtree -> root
 * 
 * @generator
 * @param {Node} node node where to start the traversal, tree root by default
 * @yields {number|string} iterator containing all values stored in the tree
 */
Tree.prototype.postorder = function* (node = this.root) {
    if (node.left != null) yield* this.postorder(node.left);
    if (node.right != null) yield* this.postorder(node.right);
    yield node.value;
}

/**
 * Function used for testing the correct working of the inorder generator function.
 * @function
 * @param {Tree} tree 
 * @returns {Array} array of values stored in a BST acquired using in order traversal
 */
Tree.prototype.inOrderTraversal = function (tree) {
    let arr = [];
    for (let n of tree.inorder()) {
        arr.push(n);
    } 
    //console.log(arr);
    return arr;
}

/**
 * Function used for testing the correct working of the preorder generator function.
 * @function
 * @param {Tree} tree 
 * @returns {Array} array of values stored in a BST acquired using pre order traversal
 */
Tree.prototype.preOrderTraversal = function (tree) {
    let arr = [];
    for (let n of tree.preorder()) {
        arr.push(n);
    }
    //console.log(arr);
    return arr;
}

/**
 * Function used for testing the correct working of the postorder generator function.
 * @function
 * @param {Tree} tree 
 * @returns {Array} array of values stored in a BST acquired using post order traversal
 */
Tree.prototype.postOrderTraversal = function (tree) {
    let arr = [];
    for (let n of tree.postorder()) {
        arr.push(n);
    }
    //console.log(arr);
    return arr;
}