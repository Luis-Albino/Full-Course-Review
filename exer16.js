"use strict"

const findLoopStart = require("./apis/exer16.js");
const printTree = require("./apis/exer10.js");
const Root = printTree.prototype.Root;

// Defining roots-nodes //
let root1 = new Root(1);
let root2 = new Root(2);
let root3 = new Root(2);
let root4 = new Root(3);
let root5 = new Root(3);
let root6 = new Root(6);
let root7 = new Root(7);
let root8 = new Root(2);
let root9 = new Root(1);

// Defining singly linked list with a loop //
root1.nodes.push(root2);
root2.nodes.push(root3);
root3.nodes.push(root4);
root4.nodes.push(root5);
root5.nodes.push(root6);
root6.nodes.push(root7);
root7.nodes.push(root8);
root8.nodes.push(root9);
root9.nodes.push(root4);


console.log(findLoopStart(root1))
