function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
 
    function sum(a, b) {
        return a + b;
    }
 
    function subtract(c) {
        return sum(firstNumber, secondNumber) - c;
    }
 
    console.log(subtract(thirdNumber));
}
 
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);