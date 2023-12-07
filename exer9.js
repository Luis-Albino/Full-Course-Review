"use strict"
const { iterativeFlattenArray, recursiveFlattenArray } = require("./apis/exer9.js");

const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]

console.log(recursiveFlattenArray(input));
console.log(iterativeFlattenArray(input));