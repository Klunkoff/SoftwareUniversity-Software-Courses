function solve(input) {

    let num1 = input[0];
    let num2 = input[1];

    let a1 = Number(num1[0]);
    let b1 = Number(num1[1]);
    let c1 = Number(num1[2]);
    let d1 = Number(num1[3]);

    let a2 = Number(num2[0]);
    let b2 = Number(num2[1]);
    let c2 = Number(num2[2]);
    let d2 = Number(num2[3]);

    let buff = "";

    for (let i = a1; i <= a2; i++) {

        for (let j = b1; j <= b2; j++) {

            for (let k = c1; k <= c2; k++) {

                for (let z = d1; z <= d2; z++) {

                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && z % 2 !== 0) {

                        buff += `${i}${j}${k}${z} `;
                    }
                }
            }
        }
    }

    console.log(buff);
}

// solve(["2345","6789"]);
// solve(["3256","6579"]);
solve(["1365", "5877"]);