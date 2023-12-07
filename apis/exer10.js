function printTree (binaryTree, order = 'infix') {
    let tree = JSON.parse(binaryTree.replace(/\(/g,'[')
        .replace(/\)/g,']')
        .replace(/,,/g,',[],')
        .replace(/([A-Za-z0-9]+)/g, '"$1"')
    );
    let traverseRoot = printTree.prototype.traverseRoot;

    let root = new printTree.prototype.Root (tree);
    let traversedArr = [];

    traverseRoot(root,order,traversedArr)

    return traversedArr
}

printTree.prototype.Root = function (input) { 
    let arr = Array.isArray(input)?input:[input];
    this.value = arr[0];
    this.nodes = [];

    for (let i = 1; i < arr.length; i++) {
        this.nodes[i-1] = new printTree.prototype.Root(arr[i])
    }
}

printTree.prototype.traverseRoot = function (root, order = 'infix',traversedArr = []) {
    let traverseRoot = printTree.prototype.traverseRoot;
    if (root) {
        let f1, f2, f3;

        let value = () => {if (root.value) traversedArr.push(root.value)};
        let leftNode = () => traverseRoot(root.nodes[0],order,traversedArr);
        let rightNode = () => traverseRoot(root.nodes[1],order,traversedArr);

        switch(order) {
            case 'prefix':
                f1 = value; f2 = leftNode; f3 = rightNode;
                break;
            case 'infix':
                f1 = leftNode; f2 = value; f3 = rightNode;
                break;
            case 'postfix':
                f1 = leftNode; f2 = rightNode; f3 = value;
        }

        f1();
        f2();
        f3();

    }
}

module.exports = printTree;