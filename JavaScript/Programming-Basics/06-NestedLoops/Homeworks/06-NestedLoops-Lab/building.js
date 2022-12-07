function solve(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (i = floors; i > 0; i--) {

        let buff = '';

        for (j = 0; j < rooms; j++) {

            if (i === floors) {

                buff += `L${i}${j} `;

            } else if (i % 2 === 0) {

                buff += `O${i}${j} `;

            } else {

                buff += `A${i}${j} `;
            }
        }

        console.log(buff);
    }
}

// solve(["6","4"]);
// solve(["9","5"]);
solve(["4", "4"]);