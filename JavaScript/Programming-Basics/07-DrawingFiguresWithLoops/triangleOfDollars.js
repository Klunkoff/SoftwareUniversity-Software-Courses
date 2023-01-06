function solve(number) {
 
    for (let i = 0; i < number; i++) {
 
        let row = '$ ';
 
        for (let j = 0; j < i; j++) {
 
            row += '$ ';
        }
 
        console.log(row);
    }
}
 
solve(5);