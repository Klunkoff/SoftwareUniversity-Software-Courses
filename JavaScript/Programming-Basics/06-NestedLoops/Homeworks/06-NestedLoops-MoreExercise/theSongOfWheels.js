function solve(input) {

    let controlNum = Number(input[0]);

    let buff = '';
    let fourthNum = 0;
    let password = 0;
    let isPasswordFind = false;

    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {

            for (let k = 1; k <= 9; k++) {

                for (let z = 1; z <= 9; z++) {

                    if (i < j && k > z) {

                        let result = (i * j) + (k * z);

                        if (result === controlNum) {

                            buff += `${i}${j}${k}${z} `;
                            fourthNum++;

                            if (fourthNum === 4) {

                                password = `${i}${j}${k}${z}`;
                                isPasswordFind = true;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(buff);

    if (isPasswordFind) {

        console.log(`Password: ${password}`);

    } else {

        console.log(`No!`);
    }
}

// solve(['11']);
// solve(['139']);
solve(['110']);