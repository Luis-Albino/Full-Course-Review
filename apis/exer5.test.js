const reverseBlocks = require("./exer5.js");
  
const arr1 = [0,1,2,3];
const blockSize1 = 2;
const reversed1 = [1,0,3,2];

const arr2 = [0,1,2,3];
const blockSize2 = 5;
const reversed2 = [3,2,1,0];

test('Test exer5: reverseBlocks 1', function () {
    reverseBlocks(arr1,blockSize1)
    expect(arr1).toEqual(reversed1);
})

test('Test exer5: reverseBlocks 2', function () {
    reverseBlocks(arr2,blockSize2)
    expect(arr2).toEqual(reversed2);
})

test('Test exer5: reverseBlocks 3', function () {
    reverseBlocks(arr1,1)
    expect(arr1).toEqual(arr1);
})