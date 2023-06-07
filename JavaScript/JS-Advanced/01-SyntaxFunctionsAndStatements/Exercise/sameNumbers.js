function sameNumbers(number) {

    let stringNum = String(number);
    let firstDigit = Number(stringNum[0]);
    let isEqualDigits = true;
    let sum = firstDigit;

    for (let i = 1; i < stringNum.length; i++) {

        let currentDigit = Number(stringNum[i]);
        sum += currentDigit;

        if (firstDigit != currentDigit) {
            isEqualDigits = false;
        }
    }

    console.log(isEqualDigits);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);