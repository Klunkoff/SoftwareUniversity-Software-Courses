function solve(input) {
 
    let maxX = Number(input[0]);
    let maxY = Number(input[1]);
    let passwordsCount = Number(input[2]);
 
    let charAIndex = 35;
    let charBIndex = 64;
    let counter = 0;
    let result = [];
    let isLimitReached = false;
 
    for (let i = 1; i <= maxX; i++) {
 
        if (isLimitReached) {
            break;
        }
 
        for (let j = 1; j <= maxY; j++) {
 
            let charA = String.fromCharCode(charAIndex);
            let charB = String.fromCharCode(charBIndex);
 
            let currentResult = charA + charB + i + j + charB + charA;
            result.push(currentResult);
 
            charAIndex++;
            charBIndex++;
            counter++;
 
            if (charAIndex > 55) {
 
                charAIndex = 35;
            }
 
            if (charBIndex > 96) {
                
                charBIndex = 64;
            }
 
            if (counter == passwordsCount) {
 
                isLimitReached = true;
                break;
            }
        }
    }
 
    console.log(result.join('|') + '|');
}
 
// solve(['2', '3', '10']);
solve(['20', '50', '10']);