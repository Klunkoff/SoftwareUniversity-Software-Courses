function sumEvenNumbers(array) {
 
    let sum = 0;
 
    for (let i = 0; i < array.length; i++) {
 
        let countNum = Number(array[i]);
 
        if (countNum % 2 == 0) {
 
            sum += countNum;
        }
    }
 
    console.log(sum);
}
 
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);