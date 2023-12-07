import chalk from 'chalk';

function loadingBar(totalPrimes, computedPrimes,barCells) {
    // const barCells = 10;
    const progress = computedPrimes / totalPrimes;
    const progressBar = Array(Math.floor(progress * barCells)).fill(chalk.green(String.fromCharCode(9608))).join('')  +
      Array(barCells - Math.floor(progress * barCells)).fill(chalk.gray(String.fromCharCode(9608))).join('');
    const percentage = chalk.blue((progress * 100).toFixed(2));

    process.stdout.clearLine(); // Clear the previous line
    process.stdout.cursorTo(0); // Move the cursor to the beginning of the line
    process.stdout.write(`${progressBar} ${percentage}%`);
}

function primeNumbers () {
    let totalPrimes = Number(process.argv[2]);

    // For loading bar division //
    let totalCells = 10;
    let cell = 0;

    if (totalPrimes === undefined) {
        console.log(chalk.red(`Missing input number in command line`));
        return
    }
    else if (totalPrimes === 0 || isNaN(totalPrimes)) {
        console.log(chalk.red(`Invalid command line input: Integer greater than zero is expected`));
        return
    }
    else if (totalPrimes === 1) {
        loadingBar(1,1,totalCells);
        console.log(chalk.yellow(`\nDONE: 2`));
        return
    };

    if (totalPrimes < 1) return null;

    let list = [2];
    let number = 3;

    while (list.length < totalPrimes) {
        let isPrime = true;
        for (let prime of list) {
            if (number % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            list.push(number);
            if (list.length/totalPrimes >= cell/totalCells) {
              cell++;
              loadingBar(totalPrimes,list.length,totalCells)
            }
        }
        number++;
    }

    console.log(chalk.yellow(`\nDONE: ${list.join(', ')}`))
}

primeNumbers()
  