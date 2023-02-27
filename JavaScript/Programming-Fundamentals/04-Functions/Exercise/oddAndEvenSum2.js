function oddAndEvenSum(number) {
 
    let numberAsString = String(number);
 
    function sumEvenNumbers(stringNum) {
 
        let evenSum = 0;
 
        for (let i = 0; i < stringNum.length; i++) {
 
            let countNum = Number(stringNum[i]);
 
            if (countNum % 2 === 0) {
                evenSum += countNum;
            }
        }
 
        return evenSum;
    }
 
    function sumOddNumbers(stringNum) {
 
        let oddSum = 0;
 
        for (let i = 0; i < stringNum.length; i++) {
 
            let countNum = Number(stringNum[i]);
 
            if (countNum % 2 !== 0) {
                oddSum += countNum;
            }
        }
 
        return oddSum;
    }
 
    let evenSumResult = sumEvenNumbers(numberAsString);
    let oddSumResult = sumOddNumbers(numberAsString);
 
    console.log(`Odd sum = ${oddSumResult}, Even sum = ${evenSumResult}`);
}
 
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);