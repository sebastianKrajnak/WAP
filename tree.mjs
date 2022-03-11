'use strict';

/**
 * Constructor creating a binary tree with one node as root and a comparator function passed as an argument
 * @param {function} comparator
 */
export function Tree (comparator) {
    this.root = null;
    this.comparator = comparator;
}

/**
 * 
 * @param {number} value 
 */
function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

Tree.prototype = new Tree();

/**
 * 
 * @param {*} value 
 */
Tree.prototype.insertValue = function (value) {
    var nodeNew = new Node(value);

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
 * 
 * @param {*} node 
 */
Tree.prototype.inorder = function* (node = this.root) {
    if (node.left != null) yield* this.inorder(node.left);
    yield node.value;
    if (node.right != null) yield* this.inorder(node.right);
}

/**
 * 
 * @param {*} node 
 */
Tree.prototype.preorder = function* (node = this.root) {
    yield node.value;
    if (node.left != null) yield* this.preorder(node.left);
    if (node.right != null) yield* this.preorder(node.right);
}

/**
 * 
 * @param {*} node 
 */
Tree.prototype.postorder = function* (node = this.root) {
    if (node.left != null) yield* this.postorder(node.left);
    if (node.right != null) yield* this.postorder(node.right);
    yield node.value;
}

export function inOrderTraversal (func, input) {
    let t = new Tree(func);
    input.forEach(i => t.insertValue(i));
    let arr = [];
    for (let n of t.inorder()) {
        arr.push(n);
    } 
    //console.log(arr);
    return arr;
}

export function preOrderTraversal (func, input) {
    let t = new Tree(func);
    input.forEach(i => t.insertValue(i));
    let arr = [];
    for (let n of t.preorder()) {
        arr.push(n);
    }
    //console.log(arr);
    return arr;
}

export function postOrderTraversal (func, input) {
    let t = new Tree(func);
    input.forEach(i => t.insertValue(i));
    let arr = [];
    for (let n of t.postorder()) {
        arr.push(n);
    }
    //console.log(arr);
    return arr;
}