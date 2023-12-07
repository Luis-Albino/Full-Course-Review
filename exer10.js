"use strict"

const printTree = require("./apis/exer10.js");

let bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

console.log(printTree(bTree,'postfix'))