const findLoopStart = require("./exer16.js");
const printTree = require("./exer10.js");
const Root = printTree.prototype.Root;

// Defining roots-nodes //
let root1 = new Root(1);
let root2 = new Root(2);
let root3 = new Root(3);
let root4 = new Root(4);

// Defining singly linked list with a loop //
root1.nodes.push(root2);
root2.nodes.push(root3);
root3.nodes.push(root4);
root4.nodes.push(root2);


console.log(findLoopStart(root1))

test('Test exer16: findLoopStart', function () {
    expect(findLoopStart(root1).value).toEqual(root2.value);
})

// Unlooped //
let rootUnlooped1 = new Root(1);
let rootUnlooped2 = new Root(2);
rootUnlooped1.nodes.push(rootUnlooped2);

test('Test exer16: findLoopStart Unlooped', function () {
    expect(findLoopStart(rootUnlooped1)).toEqual(undefined);
})
