function jansNotation(inputData) {
 
    let operandsArray = [];
    let isNoOperands = false;
    
    let operatorObject = {
 
        '+': (firstNum, secondNum) => (firstNum + secondNum),
        '-': (firstNum, secondNum) => (firstNum - secondNum),
        '*': (firstNum, secondNum) => (firstNum * secondNum),
        '/': (firstNum, secondNum) => (firstNum / secondNum),
    };
 
    for (let data of inputData) {
 
        if (typeof data == 'number') {
            operandsArray.push(data);
 
        } else {
 
            if (operandsArray.length < 2) {
                console.log(`Error: not enough operands!`);
                isNoOperands = true;
 
                break;
            }
 
            let secondOperand = operandsArray.pop();
            let firstOperand = operandsArray.pop();
 
            let result = operatorObject[data](firstOperand, secondOperand);
            operandsArray.push(result);
        }
    }
 
    if (operandsArray.length > 1) {
        console.log(`Error: too many operands!`);
 
    } else if (!isNoOperands) {
        console.log(operandsArray.join());
    }
}
 
jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);