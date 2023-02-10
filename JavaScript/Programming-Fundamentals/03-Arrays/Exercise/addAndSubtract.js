function addAndSubtract(array) {
 
    let newArray = [];
    let sumNumbersArray = 0;
    let sumNumbersNewArray = 0;
 
    for (let i = 0; i < array.length; i++) {
 
        let countNum = array[i];
 
        if (countNum % 2 == 0) {
 
            countNum += i;
            newArray.push(countNum);
 
        } else {
 
            countNum -= i;
            newArray.push(countNum);
        }
    }
 
    for (let j = 0; j < array.length; j++) {
 
        sumNumbersArray += array[j];
        sumNumbersNewArray += newArray[j];
    }
 
    console.log(newArray);
    console.log(sumNumbersArray);
    console.log(sumNumbersNewArray);
}
 
// addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);