function solve(input) {

    let index = 0;
    let entryNumber = Number(input[index]);
    let countNumber = 1;

    while (entryNumber >= countNumber) {

        console.log(countNumber);
        countNumber = countNumber * 2 + 1;
    }
}

solve(['3']);
// solve(['8']);
// solve(['17']);
// solve(['31']);