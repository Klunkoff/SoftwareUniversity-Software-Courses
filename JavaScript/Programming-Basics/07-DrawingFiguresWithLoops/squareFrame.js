function solve(number) {
 
    let upperAndLowerFrame = '+ ';
 
    for (let i = 1; i <= number - 2; i++) {
 
        upperAndLowerFrame += '- ';
    }
 
    upperAndLowerFrame += '+';
 
    console.log(upperAndLowerFrame);
 
    for (let j = 1; j <= number - 2; j++) {
 
        let middleDraw = '| ';
 
        for (let k = 1; k <= number - 2; k++) {
 
            middleDraw += '- ';
        }
 
        middleDraw += '|';
 
        console.log(middleDraw);
    }
 
    console.log(upperAndLowerFrame);
}
 
solve(7);