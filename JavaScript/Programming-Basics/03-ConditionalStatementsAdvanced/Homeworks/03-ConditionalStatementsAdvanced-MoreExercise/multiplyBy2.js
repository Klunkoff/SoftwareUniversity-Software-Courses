function solve(input) {
 
    for (let i = 0; i < input.length; i++) {
 
        let countNumber = input[i];
 
        if (countNumber < 0) {
 
            console.log(`Negative number!`);
 
            break;
 
        } else {
 
            let result = countNumber * 2;
            console.log(`Result: ${result.toFixed(2)}`);
        }
    }
}
 
// solve([12, 43.2144, 12.3, 543.23, -20]);
solve([23.43, 12.3245, 0, 65.23432, 23, 65, -12]);
// solve([-123]);