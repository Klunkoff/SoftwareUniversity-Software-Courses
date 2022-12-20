function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num1add = Number(input[2]);
    let num2add = Number(input[3]);

    let countNum1 = num1 + num1add;
    let countNum2 = num2 + num2add;

    for (let i = num1; i <= countNum1; i++) {

        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {

            for (let j = num2; j <= countNum2; j++) {

                if (j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0 && j % 7 !== 0) {

                    console.log(`${i}${j}`);
                }
            }
        }
    }
}

// solve(['10','20','5','5']);
solve(['10', '30', '9', '6']);