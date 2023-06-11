function negativePositiveNumbers(arrayOfNums) {
 
    let resultArray = [];
 
    for (let num of arrayOfNums) {
 
        if (num >= 0) {
            resultArray.push(num);
            
        } else {
            resultArray.unshift(num);
        }
    }
 
    console.log(resultArray.join('\n'));
}
 
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);