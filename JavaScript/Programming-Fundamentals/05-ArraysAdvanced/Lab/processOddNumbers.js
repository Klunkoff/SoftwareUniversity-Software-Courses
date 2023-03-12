function processOddNumbers(arrayOfNums) {
 
    let newArray = [];
 
    for (let i = 0; i < arrayOfNums.length; i++) {
 
        if (i % 2 != 0) {
            newArray.push(arrayOfNums[i] * 2);
        }
    }
 
    newArray.reverse();
 
    console.log(newArray.join(' '));
}
 
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);