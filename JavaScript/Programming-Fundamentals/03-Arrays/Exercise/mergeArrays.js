function mergeArrays(firstArray, secondArray) {
 
    let thirdArray = [];
 
    for (let i = 0; i < firstArray.length; i++) {
 
        let countElementFirstArray;
        let countElementSecondArray;
        let sumOfElements;
 
        if (i % 2 === 0) {
 
            countElementFirstArray = Number(firstArray[i]);
            countElementSecondArray = Number(secondArray[i]);
            sumOfElements = countElementFirstArray + countElementSecondArray;
            thirdArray.push(sumOfElements);
 
        } else {
 
            countElementFirstArray = firstArray[i];
            countElementSecondArray = secondArray[i];
            sumOfElements = `${countElementFirstArray}${countElementSecondArray}`;
            thirdArray.push(sumOfElements);
        }
    }
 
    console.log(thirdArray.join(' - '));
}
 
// mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);