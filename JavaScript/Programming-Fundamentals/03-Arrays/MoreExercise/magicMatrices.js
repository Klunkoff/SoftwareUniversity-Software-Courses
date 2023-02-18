function magicMatrices(arrayOfArrays) {
 
    let rowArraySum = [];
    let columnArraySum = [];
    let isMagic = true;
 
    for (let array of arrayOfArrays) {
 
        let currentArraySum = 0;
 
        for (let i = 0; i < array.length; i++) {
            let currentNumber = array[i];
            currentArraySum += currentNumber;
        }
 
        rowArraySum.push(currentArraySum);
    }
 
    while (arrayOfArrays[0].length !== 0) {
 
        let currentColumnSum = 0;
 
        for (let array of arrayOfArrays) {
            let currentNumber = array.shift();
            currentColumnSum += currentNumber;
        }
 
        columnArraySum.push(currentColumnSum);
    }
 
    for (let j = 0; j < rowArraySum.length; j++) {
 
        if (!isMagic) {
            break;
        }
 
        let rowNumber = rowArraySum[j];
 
        for (let k = 0; k < columnArraySum.length; k++) {
 
            let columnNumber = columnArraySum[k];
 
            if (rowNumber !== columnNumber) {
                isMagic = false;
 
                break;
            }
        }
    }
 
    let result = isMagic ? true : false;
    console.log(result);
}
 
magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);