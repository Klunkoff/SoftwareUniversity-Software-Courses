function solve(number) {
 
    for (let i = 1; i <= number; i++) {
 
        let row = '$ '.repeat(i);
 
        console.log(row);
    }
}
 
solve(5);