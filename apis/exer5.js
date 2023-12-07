// function reverseBlocks(arr, blockSize) {
//     for (let i = 0; i < arr.length; i += blockSize) {
//         const block = arr.slice(i, i + blockSize);
//         block.reverse();
//         arr.splice(i, blockSize, ...block);
//     }
//     return arr;
// }

function reverseBlocks(arr, blockSize) {

    for (let i = 0; i < arr.length; i += blockSize) {

        if (arr.length - i < blockSize) blockSize = arr.length - i;
        if (blockSize === 1) return arr;

        for (let j = 0; j < Math.floor(blockSize/2); j++) {
            let x = arr[i+j];
            arr[i+j] = arr[i+blockSize-1-j];
            arr[i+blockSize-1-j] = x;
        }
    }

    return arr;
}

module.exports = reverseBlocks;