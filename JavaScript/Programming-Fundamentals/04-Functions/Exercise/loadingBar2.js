function loadingBar(number) {

    let firstDigit = number / 10;
    let completedBar = '%'.repeat(firstDigit);
    let incompletedBar = '.'.repeat(10 - firstDigit);

    let bar = completedBar + incompletedBar;

    if (firstDigit === 10) {
        console.log(`${number}% Complete!`);
        console.log(`[${bar}]`);

    } else {
        console.log(`${number}% [${bar}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(0);
loadingBar(50);
loadingBar(100);