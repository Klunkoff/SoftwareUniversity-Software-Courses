function greatestCommonDivisor(firstNum, secondNum) {
 
    let biggestNum = Math.max(firstNum, secondNum);
 
    for (let i = biggestNum; i > 0; i--) {
 
        if (firstNum % i == 0 && secondNum % i == 0) {
            console.log(i);
 
            break;
        }
    }
}
 
// greatestCommonDivisor(15, 5);
// greatestCommonDivisor(2154, 458);
greatestCommonDivisor(20, 28);