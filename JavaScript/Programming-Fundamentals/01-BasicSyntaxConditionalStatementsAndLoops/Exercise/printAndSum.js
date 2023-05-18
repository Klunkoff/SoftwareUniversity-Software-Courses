function printAndSum(startNum, endNum) {

    let sum = 0;
    let buff = '';

    for (let i = startNum; i <= endNum; i++) {

        sum += i;
        buff += `${i} `;
    }

    console.log(buff);
    console.log(`Sum: ${sum}`);
}

// printAndSum(5, 10);
printAndSum(0, 26);
// printAndSum(50, 60);