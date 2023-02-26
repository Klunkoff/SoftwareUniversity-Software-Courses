function oddAndEvenSum(number) {
 
    let numberAsString = String(number);
 
    function sum(stringNum) {
 
        let evenSum = 0;
        let oddSum = 0;
 
        for (let i = 0; i < stringNum.length; i++) {
 
            let countNum = Number(stringNum[i]);
 
            if (countNum % 2 === 0) {
                evenSum += countNum;
                
            } else {
                oddSum += countNum;
            }
        }
 
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
 
    sum(numberAsString);
}
 
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);