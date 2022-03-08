'use strict';

export function Tree (comparator) {
    this.root = null;
    this.comparator = comparator;
}

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

Tree.prototype = new Tree();

Tree.prototype.insertValue = function (value) {
    var nodeNew = new Node(value);

    const recursiveInsert = (node, newNode, compareFunc) => {
        if (compareFunc(node.value, newNode.value)) {
            if (node.right === null)
                node.right = newNode;
            else
                recursiveInsert(node.right, newNode, compareFunc)
        }
        else {
            if (node.left === null)
                node.left = newNode;
            else
                recursiveInsert(node.left, newNode, compareFunc);
        }
    }

    if(this.root === null){
        this.root = nodeNew;
    }
    else{
        recursiveInsert(this.root, nodeNew, this.comparator);
    }
}

Tree.prototype.inorder = function* (node = this.root) {
    if (node.left != null) yield* this.inorder(node.left);
    yield node.value;
    if (node.right != null) yield* this.inorder(node.right);
}


Tree.prototype.preorder = function* (node = this.root) {
    yield node.value;
    if (node.left != null) yield* this.preorder(node.left);
    if (node.right != null) yield* this.preorder(node.right);
}

Tree.prototype.postorder = function* (node = this.root) {
    if (node.left != null) yield* this.postorder(node.left);
    if (node.right != null) yield* this.postorder(node.right);
    yield node.value;
}

