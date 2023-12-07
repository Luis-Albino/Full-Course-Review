const printTree = require("./exer10.js");

const input = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';

const outputInfix = ['D','B','E','A','H','F','I','C','G','J'];

const outputPrefix = ['A','B','D','E','C','F','H','I','G','J'];

const outputPostfix = ['D','E','B','H','I','F','J','G','C','A'];

test('Test exer10: printTree infix', function () {
    expect(printTree(input)).toEqual(outputInfix)
})

test('Test exer10: printTree prefix', function () {
    expect(printTree(input,'prefix')).toEqual(outputPrefix)
})

test('Test exer10: printTree postfix', function () {
    expect(printTree(input,'postfix')).toEqual(outputPostfix)
})


const Root = printTree.prototype.Root;

const outputRoot = {
    value: 'a',
    nodes: []
};

test('Test exer16: new Root', function () {
    let newRoot = new Root("a");
    expect(newRoot).toEqual(outputRoot)
})


