function findBalance (arr) {

    let i = 0;
    let j = arr.length - 1;
    let sumL = 0;
    let sumR = arr[j];

    while (i < j) {
        if (sumL < sumR) {
            sumL += arr[i];
            i++;
        }
        else {
            j--;
            sumR += arr[j];
        }
    }

    return (sumL === sumR)?i-1:-1;
}

module.exports = findBalance;