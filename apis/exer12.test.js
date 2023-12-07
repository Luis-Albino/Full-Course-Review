const printTree = require("./exer10.js");

let input = '(1,(2,(3),(4,(5))),(2,(4,,(5)),(3)))';
let output = ['3','2','5','4','1','4','5','2','3'];

test('Test exer12: Traverse binary tree', function () {
    expect(printTree(input)).toEqual(output)
})