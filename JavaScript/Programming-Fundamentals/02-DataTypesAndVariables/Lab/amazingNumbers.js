function amazingNumbers(number) {

    let numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        sum += Number(numberAsString[i]);
    }

    let result = sum % 10 == 9 ? `${number} Amazing? True` : `${number} Amazing? False`;
    console.log(result);
}

amazingNumbers(1233);
// amazingNumbers(999);
// amazingNumbers(583472);