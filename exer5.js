"use strict"
const reverseBlocks = require("./apis/exer5.js");
  
const arr = [0,1,2,3,4,5,6,7,8,9];
const blockSize = 3;
console.log(reverseBlocks(arr, blockSize));
console.log(reverseBlocks([0,1,2,3], 5));