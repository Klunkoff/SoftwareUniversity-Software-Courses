function solve(input) {

    let number = Number(input[0]);

    let combinations = 0;

    for (let i = 0; i <= number; i++) {

        for (let j = 0; j <= number; j++) {

            for (let z = 0; z <= number; z++) {

                let result = i + j + z;

                if (result === number) {

                    combinations++;
                }
            }
        }
    }

    console.log(combinations);
}

// solve(["25"]);
// solve(["20"]);
solve(["5"]);