function smallestOfThreeNumbers(num1, num2, num3) {
 
    let array = [num1, num2, num3];
    let smallestNum = Number.MAX_SAFE_INTEGER;
 
    for (let number of array) {
 
        if (number < smallestNum) {
            smallestNum = number;
        }
    }
 
    console.log(smallestNum);
}
 
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);