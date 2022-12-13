function solve(input) {

    let number = Number(input[0]);
    let buff = '';

    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {

            for (let k = 1; k <= 9; k++) {

                for (let z = 1; z <= 9; z++) {

                    let firstSum = i + j;
                    let secondSum = k + z;

                    if (firstSum === secondSum && firstSum <= number && number % firstSum === 0) {

                        buff += `${i}${j}${k}${z} `;
                    }
                }
            }
        }
    }

    console.log(buff);
}

solve(['3']);
// solve(['7']);
// solve(['24']);