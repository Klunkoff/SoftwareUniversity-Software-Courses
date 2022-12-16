function solve(input) {

    let hundreds = Number(input[0]);
    let tens = Number(input[1]);
    let ones = Number(input[2]);

    for (let i = 1; i <= hundreds; i++) {

        if (i % 2 === 0) {

            for (let j = 1; j <= tens; j++) {

                if (j === 2 || j === 3 || j === 5 || j === 7) {

                    for (let k = 1; k <= ones; k++) {

                        if (k % 2 === 0) {

                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                }
            }
        }
    }
}

// solve(['3', '5', '5']);
solve(['8', '2', '8']);