function factorialDivision(fisrtNumber, secondNumber) {
 
    let resultFirstNum = 1;
    let resultSecondNum = 1;
 
    factorialFindFirstNum(fisrtNumber);
    factorialFindSecondNum(secondNumber);
 
    function factorialFindFirstNum(n) {
 
        if (n > 0) {
            resultFirstNum *= n;
            factorialFindFirstNum(n - 1);
        } 
    }
 
    function factorialFindSecondNum(z) {
 
        if (z > 0) {
            resultSecondNum *= z;
            factorialFindSecondNum(z - 1);
        } 
    }
 
    let total = resultFirstNum / resultSecondNum;
    console.log(total.toFixed(2));
}
 
factorialDivision(5, 2);
factorialDivision(6, 2);