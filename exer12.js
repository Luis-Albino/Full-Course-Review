"use strict"

const printTree = require("./apis/exer10.js");

let bTree = '(1,(2,(3),(4,(5))),(2,(4,,(5)),(3)))';

// Traverse the binary tree in infix order //
let treeArray = printTree(bTree)
console.log(treeArray)

// If the printed array is symmetric, then the tree is also symmetric //
let treeLength = treeArray.length;
let symmetric = true;
for (let i=0; i<Math.floor(treeLength/2); i++) {
    if (treeArray[i] !== treeArray[treeLength-1-i]) {
        symmetric = false;
        break
    }
}
console.log("Symmetric =",symmetric)