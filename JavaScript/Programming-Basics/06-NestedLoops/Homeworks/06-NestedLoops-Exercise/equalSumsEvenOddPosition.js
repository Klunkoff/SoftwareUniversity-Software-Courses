function solve(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let buff = '';

    for (let j = startNum; j <= endNum; j++) {

        let countNum = '' + j;

        let oddNum1 = Number(countNum[0]);
        let oddNum2 = Number(countNum[2]);
        let oddNum3 = Number(countNum[4]);

        let oddSum = oddNum1 + oddNum2 + oddNum3;

        let evenNum1 = Number(countNum[1]);
        let evenNum2 = Number(countNum[3]);
        let evenNum3 = Number(countNum[5]);

        let evenSum = evenNum1 + evenNum2 + evenNum3;

        if (oddSum === evenSum) {

            buff += `${countNum} `;
        }
    }

    console.log(buff);
}

// solve(["100000","100050"]);
// solve(["123456","124000"]);
solve(["299900", "300000"]);
// solve(["100115","100120"]);