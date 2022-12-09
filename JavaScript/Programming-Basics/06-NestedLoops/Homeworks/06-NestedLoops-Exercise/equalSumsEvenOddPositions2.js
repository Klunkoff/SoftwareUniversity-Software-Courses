function solve(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let buff = '';

    for (let i = startNum; i <= endNum; i++) {

        let countNum = '' + i;
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < countNum.length; j++) {

            let currentNum = Number(countNum[j]);

            if (j % 2 === 0) {

                evenSum += currentNum;

            } else {

                oddSum += currentNum;
            }
        }

        if (oddSum === evenSum) {

            buff += `${countNum} `;
        }
    }

    console.log(buff);
}

// solve(["100000","100050"]);
// solve(["123456","124000"]);
// solve(["299900","300000"]);
solve(["100115", "100120"]);