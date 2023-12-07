const isPalindrome = require("./exer17.js");
const printTree = require("./exer10.js");
const Root = printTree.prototype.Root;

// Defining roots-nodes //
let root1 = new Root(1);
let root2 = new Root(2);
let root3 = new Root(3);
let root4 = new Root(2);
let root5 = new Root(1);

// Defining singly linked list with a loop //
root1.nodes.push(root2);
root2.nodes.push(root3);
root3.nodes.push(root4);
root4.nodes.push(root5);
root5.nodes.push(root2);

test('Test exer17: isPalindrome true', function () {
    expect(isPalindrome(root1)).toEqual(true)
})

// Defining new roots-nodes //
let newRoot1 = new Root(1);
let newRoot2 = new Root(2);
let newRoot3 = new Root(3);
let newRoot4 = new Root(4);

newRoot1.nodes.push(newRoot2);
newRoot2.nodes.push(newRoot3);
newRoot3.nodes.push(newRoot4);
newRoot4.nodes.push(newRoot2);

test('Test exer17: isPalindrome false', function () {
    expect(isPalindrome(newRoot1)).toEqual(false)
})

// Defining new roots-nodes //
let aNewRoot1 = new Root(1);
let aNewRoot2 = new Root(2);
aNewRoot1.nodes.push(aNewRoot2);

test('Test exer17: isPalindrome false 2', function () {
    expect(isPalindrome(aNewRoot1)).toEqual(false)
})