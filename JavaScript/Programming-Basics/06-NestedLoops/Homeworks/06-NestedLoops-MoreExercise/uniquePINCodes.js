function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    for (let i = 1; i <= num1; i++) {

        if (i % 2 !== 0) {

            continue;
        }

        for (let j = 1; j <= num2; j++) {

            if (j === 1 || j === 4 || j === 6 || j === 8 || j === 9) {

                continue;
            }

            for (z = 1; z <= num3; z++) {

                if (z % 2 !== 0) {

                    continue;
                }

                console.log(`${i} ${j} ${z}`);
            }
        }
    }
}

// solve(['3', '5', '5']);
solve(['8', '2', '8']);