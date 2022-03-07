'use strict';

export function Tree (comparator) {
    this.root = null;
    this.comparator = comparator;
};

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

Tree.prototype = new Tree();

Tree.prototype.insertValue = function (value) {
    var nodeNew = new Node(value);

    if(this.root === null)
        this.root = nodeNew;
    else {
        if(this.comparator(this.root, nodeNew.value)){
            
        }
    }
}

Tree.prototype.inorder = function* () {
    return 0;
}

Tree.prototype.preorder = function*() {
    return 0;
}

Tree.prototype.postorder = function*() {
    return 0;
}
