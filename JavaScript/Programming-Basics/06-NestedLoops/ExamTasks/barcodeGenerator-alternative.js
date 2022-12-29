function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let buff = "";

    for (let i = num1; i <= num2; i++) {

        let countNum = i + "";

        let a = Number(countNum[0]);
        let b = Number(countNum[1]);
        let c = Number(countNum[2]);
        let d = Number(countNum[3]);

        if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {

            buff += `${a}${b}${c}${d} `;
        }
    }

    console.log(buff);
}

// solve(["2345","6789"]);
// solve(["3256","6579"]);
solve(["1365", "5877"]);