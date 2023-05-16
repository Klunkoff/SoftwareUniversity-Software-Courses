function mathOperations(firstNum, secondNum, string) {
 
    let result;
 
    switch (string) {
 
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }
 
    console.log(result);
}
 
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');