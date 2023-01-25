function sumDigits(num) {

    let numAsString = String(num);
    let sumOfDigits = 0;

    for (let i = 0; i < numAsString.length; i++) {

        let digitCount = Number(numAsString[i]);
        sumOfDigits += digitCount;
    }

    console.log(sumOfDigits);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);