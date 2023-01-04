function solve(number) {
 
    for (let i = 1; i <= number; i++) {
 
        let starRow = '';
 
        for (let j = 1; j <= number; j++) {
 
            starRow += '*';
        }
 
        console.log(starRow);
    }
}
 
solve(2);
solve(4);