function solve(input) {

    let startInterval = Number(input[0]);
    let finishInterval = Number(input[1]);

    let sum = 0;
    let buff = "";

    for (let i = startInterval; i <= finishInterval; i++) {

        if (i % 9 === 0) {

            sum += i;
            buff = buff + `${i}\n`;
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(buff);
}

solve(['100', '200']);