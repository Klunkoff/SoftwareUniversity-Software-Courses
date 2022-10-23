function solve(input) {

    let index = 0;
    let moveNum = Number(input[index]);
    index++;

    let scores = 0;
    let digits0To9 = 0;
    let digits10To19 = 0;
    let digits20To29 = 0;
    let digits30To39 = 0;
    let digits40To50 = 0;
    let invalidNum = 0;

    for (let i = 1; i <= moveNum; i++) {

        let countNum = Number(input[index]);
        index++;

        if (countNum >= 0 && countNum < 10) {
            scores += countNum * 0.2;
            digits0To9++;
        } else if (countNum >= 10 && countNum < 20) {
            scores += countNum * 0.3;
            digits10To19++;
        } else if (countNum >= 20 && countNum < 30) {
            scores += countNum * 0.4;
            digits20To29++;
        } else if (countNum >= 30 && countNum < 40) {
            scores += 50;
            digits30To39++;
        } else if (countNum >= 40 && countNum <= 50) {
            scores += 100;
            digits40To50++
        } else {
            scores /= 2;
            invalidNum++;
        }
    }

    let percent0To9 = (digits0To9 / moveNum) * 100;
    let percent10To19 = (digits10To19 / moveNum) * 100;
    let percent20To29 = (digits20To29 / moveNum) * 100;
    let percent30To39 = (digits30To39 / moveNum) * 100;
    let percent40To50 = (digits40To50 / moveNum) * 100;
    let percentInvalidNum = (invalidNum / moveNum) * 100;

    console.log(scores.toFixed(2));
    console.log(`From 0 to 9: ${percent0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percent10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percent20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percent30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percent40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalidNum.toFixed(2)}%`);
}


solve(["10", '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);