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
            if (node.left === null)
                node.left = newNode;
            else
                recursiveInsert(node.left, newNode, compareFunc)
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                recursiveInsert(node.right, newNode, compareFunc);
        }

    if(this.root === null)
        this.root = nodeNew;
    else
        recursiveInsert(this.root, nodeNew, this.comparator)
    }
}

Tree.prototype.inorder = function* () {
    yield* this.next(node.left);
    yield node.value;
    yield* this.next(node.right);
}

Tree.prototype.preorder = function*() {
    return 0;
}

Tree.prototype.postorder = function*() {
    return 0;
}

