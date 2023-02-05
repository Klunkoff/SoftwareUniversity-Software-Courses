function sumFirstAndLastArrayElements(array) {
 
    let firstNum = array[0];
    let lastNum = array[array.length - 1];
 
    let result = firstNum + lastNum;
 
    console.log(result);
}
 
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);