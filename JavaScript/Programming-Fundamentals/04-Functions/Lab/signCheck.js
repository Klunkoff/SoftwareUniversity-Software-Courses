function signCheck(numOne, numTwo, numThree) {
 
    function multiplyNumbers(a, b, c) {
 
        let result = a * b * c;
 
        if (result < 0) {
            return 'Negative';
        } else {
            return 'Positive';
        }
    }
 
    console.log(multiplyNumbers(numOne, numTwo, numThree));
}
 
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);