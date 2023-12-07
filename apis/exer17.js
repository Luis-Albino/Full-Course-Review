const findLoopStart = require("./exer16.js");

function isPalindrome (initialRoot) {
    let loopStart = findLoopStart(initialRoot);
    let palindrome;
    if (loopStart) {
        let values = [];
        let rootReader = initialRoot;
        let passLoopStart = 0;

        while (passLoopStart < 2) {
            values.push(rootReader.value);
            rootReader = rootReader.nodes[0];
            if (rootReader === loopStart) passLoopStart++;
        }

        palindrome = true;
        for (let i=0; i<Math.floor(values.length/2); i++) {
            if (values[i] !== values[values.length-i-1]) {
                palindrome = false;
                break
            }
        }
    }
    return palindrome
}

module.exports = isPalindrome;