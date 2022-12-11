function solve(input) {

    let num = Number(input[0]);
    let buff = "";

    for (let i = 1111; i <= 9999; i++) {

        let countNum = i + "";
        let fourNum = 0;

        for (let j = 0; j < 4; j++) {

            let currentNum = Number(countNum[j]);

            if (num % currentNum === 0)

                fourNum++;

            if (fourNum === 4) {

                buff += `${countNum} `;
            }
        }
    }

    console.log(buff);
}

// solve(["3"]);
// solve(["11"]);
solve(["16"]);