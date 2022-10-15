function solve(input) {

    let stringNumber = input[0];

    let sum = 0;

    for (let i = 0; i < stringNumber.length; i++) {

        sum += Number(stringNumber[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

solve(['564891']);