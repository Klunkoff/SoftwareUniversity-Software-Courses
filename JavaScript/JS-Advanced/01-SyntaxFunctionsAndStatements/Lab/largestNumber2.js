function largestNumber2(firstNum, secondNum, thirdNum) {

    let largestNum;

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        largestNum = firstNum;

    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        largestNum = secondNum;

    } else {
        largestNum = thirdNum;
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber2(5, -3, 16);
largestNumber2(-3, -5, -22.5);