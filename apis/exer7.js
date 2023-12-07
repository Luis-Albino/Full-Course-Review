function longestRunOfTwoNumbers (input) {
    let obj = {};
    let run = "";
    let previous = "";
    let complement = "";
    let largest = "";
    for(let digit of input) {

        if (!obj[[digit]]) {
            if (obj[[complement]]) delete obj[[complement]];
            obj[[digit]] = true;
            run = previous + digit;
        }
        else {
            run += digit;
        }

        let lastChar = previous.charAt(previous.length - 1);

        if (lastChar != digit) complement = lastChar;       
        previous = (lastChar === digit)?previous+digit:digit;

        if (run.length > largest.length) largest = run;
    }

    return largest
}

module.exports = longestRunOfTwoNumbers;