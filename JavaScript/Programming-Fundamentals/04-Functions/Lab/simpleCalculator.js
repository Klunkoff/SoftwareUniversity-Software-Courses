function simpleCalculator(firstNumber, secondNumber, operator) {
 
    let operation = null;
 
    switch (operator) {
 
        case 'multiply': operation = (a, b) => (a * b); break;
        case 'divide': operation = (a, b) => (a / b); break;
        case 'add': operation = (a, b) => (a + b); break;
        case 'subtract': operation = (a, b) => (a - b); break;
    }
 
    console.log(operation(firstNumber, secondNumber));
}
 
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');