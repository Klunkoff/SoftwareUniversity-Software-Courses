function sortNumbers(num1, num2, num3) {

    let sortedNums = [num1, num2, num3].sort((a, b) => b - a);

    console.log(sortedNums.join('\n'));
}

// sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
// sortNumbers(3, 2, 2);
// sortNumbers(2, 3, 3);
// sortNumbers(0, 0, 2);