function solve(input) {

    let num = Number(input[0]);
    let countNum = 0;
    let isCountNumEqual = false;

    for (let rows = 1; rows <= num; rows++) {

        let buff = '';

        for (let cols = 1; cols <= rows; cols++) {

            countNum++;
            buff += `${countNum} `;

            if (countNum === num) {

                isCountNumEqual = true;

                break;
            }
        }

        console.log(buff);

        if (isCountNumEqual) {

            break;
        }
    }
}

// solve(["7"]);
// solve(["12"]);
solve(["15"]);