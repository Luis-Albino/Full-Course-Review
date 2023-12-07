const findLoopStart = require("./exer16.js");
const printTree = require("./exer10.js");
const Root = printTree.prototype.Root;

const outputRoot = {
    value: 'a',
    nodes: []
};

test('Test exer16: new Root', function () {
    let newRoot = new Root("a");
    expect(newRoot).toEqual(outputRoot)
})