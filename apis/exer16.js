// Floyd’s Cycle Finding Algorithm //
function findLoopStart (initialRoot) {
    let slowFinder = initialRoot;
    let fastFinder = initialRoot;
    let loop = undefined;

    while (fastFinder.nodes[0] && fastFinder.nodes[0].nodes[0]) {
        slowFinder = slowFinder.nodes[0];
        fastFinder = fastFinder.nodes[0].nodes[0];
        if (fastFinder === slowFinder) {
            loop = true;
            break
        }
    }

    if (loop) slowFinder = initialRoot;
    else return;

    while (fastFinder !== slowFinder) {
        slowFinder = slowFinder.nodes[0];
        fastFinder = fastFinder.nodes[0];
    }

    return slowFinder
}

module.exports = findLoopStart;