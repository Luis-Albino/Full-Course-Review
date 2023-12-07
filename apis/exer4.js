function mergeArrays (arr1,arr2) {
    let i, j;

    for (i=0; i<arr1.length; i++) {
        if (arr1[i] == undefined) break
    }

    i -= 1;
    j = arr2.length - 1;
    if (j >= arr1.length - i - 1) return;

    let index = i + j + 1;
    const min = (arr1[0] < arr2[0])?arr1[0]:arr2[0];

    while (i >= 0 && j >= 0) {
        if (arr2[j] >= arr1[i]) {
            arr1[index] = arr2[j];
            j -= 1;
        }
        else {
            arr1[index] = arr1[i];
            i -= 1;
        }
        index -= 1;
    }

    arr1[0] = min;

    return arr1
}

module.exports = mergeArrays;