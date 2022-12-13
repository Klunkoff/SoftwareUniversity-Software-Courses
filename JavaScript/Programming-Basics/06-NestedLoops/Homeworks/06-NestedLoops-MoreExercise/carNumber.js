function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let buff = '';

    for (let i = num1; i <= num2; i++) {

        for (let j = num1; j <= num2; j++) {

            for (let k = num1; k <= num2; k++) {

                for (let z = num1; z <= num2; z++) {

                    if (i % 2 === 0 && i > z && z % 2 !== 0 && (j + k) % 2 === 0) {

                        buff += `${i}${j}${k}${z} `;

                    } else if (i % 2 !== 0 && i > z && z % 2 === 0 && (j + k) % 2 === 0) {

                        buff += `${i}${j}${k}${z} `;
                    }
                }
            }
        }
    }

    console.log(buff);
}

// solve(['2', '3']);
solve(['3', '5']);