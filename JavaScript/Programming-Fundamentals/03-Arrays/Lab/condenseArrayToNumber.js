function condenseArrayToNumber(array) {
 
    let newArray = [];
 
    for (let i = 0; i < array.length - 1; i++) {
 
        let j = i + 1;
 
        let firstNum = array[i];
        let secondNum = array[j];
 
        let tempSum = firstNum + secondNum;
        newArray.push(tempSum);
 
        if (i == array.length - 2) {
 
            array = newArray;
            newArray = [];
            i = -1;
            j = i + 1;
        }
    }
 
    console.log(array.toString());
}
 
condenseArrayToNumber([12]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([2, 10, 3]);