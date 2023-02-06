function evenAndOddSubstraction(array) {
 
    let evenSum = 0;
    let oddSum = 0;
 
    for (let i = 0; i < array.length; i++) {
 
        let countNum = array[i];
 
        if (countNum % 2 == 0) {
 
            evenSum += countNum;
 
        } else {
 
            oddSum += countNum;
        }
    }
 
    let result = evenSum - oddSum;
 
    console.log(result);
}
 
evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);