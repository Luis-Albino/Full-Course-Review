const printTree = require("./exer10.js");
const Root = printTree.prototype.Root;

function isSameLevel (tree, n1, n2) {
    let root = new Root(tree);
    let values = [n1];
    if (n2 !== n1) values.push(n2);
    let levels = isSameLevel.prototype.findValueLevels(root,values);

    let analyzed = {};
    for (let depth of levels[0]) {
        if (values.length === 1 && analyzed[[depth]]) {
            console.log(`The number ${n1} can be found in the same depth level ${depth}`);
            return depth
        }
        analyzed[[depth]] = true;
    }

    for (let depth of levels[1]) {
        if (analyzed[[depth]]) {
            console.log(`The numbers ${n1} and ${n2} can be found in the same depth level ${depth}`);
            return depth
        }
    }

    console.log('The number'+((n1 === n2)?` ${n1} is`:`s ${n1} and ${n2} are`)+' not found in the same level anywhere')
}

isSameLevel.prototype.findValueLevels = function (root,values,depth = 0,levels = [[],[]]) {
    if (root) {
        for (let i in values) {
            if (root.value === values[i]) levels[i].push(depth);
        }

        depth++;

        for (let rootNode of root.nodes) isSameLevel.prototype.findValueLevels(rootNode,values,depth,levels);
    }

    return levels
}

module.exports = isSameLevel;