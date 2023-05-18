function solve(num) {

    let result = 0;
    isDivisible = false;

    if (num % 2 === 0) {
        isDivisible = true;
        result = 2;
    }
    if (num % 3 === 0) {
        isDivisible = true;
        result = 3;
    }
    if (num % 6 === 0) {
        isDivisible = true;
        result = 6;
    }
    if (num % 7 === 0) {
        isDivisible = true;
        result = 7;
    }
    if (num % 10 === 0) {
        isDivisible = true;
        result = 10;
    }

    if (isDivisible) {
        console.log(`The number is divisible by ${result}`);
    } else {
        console.log(`Not divisible`);
    }
}

solve(30);
solve(15);
solve(12);
solve(1643);