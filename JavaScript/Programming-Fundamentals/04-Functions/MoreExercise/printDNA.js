function printDNA(number) {
 
    let pattern = ['**!!**', '*!--!*', '!----!', '*!--!*', '**!!**', '*!--!*', '!----!', '*!--!*', '**!!**', '*!--!*', '!----!', '*!--!*', '**!!**', '*!--!*', '!----!', '*!--!*', '**!!**', '*!--!*', '!----!', '*!--!*'];
    let sequencePattern = ['AT', 'CG', 'TT', 'AG', 'GG', 'AT', 'CG', 'TT', 'AG', 'GG', 'AT', 'CG', 'TT', 'AG', 'GG', 'AT', 'CG', 'TT', 'AG', 'GG'];
    let counter = 0;
 
    for (let i = 0; i < number; i++) {
 
        if (counter == number) {
            break;
        }
 
        if (i == pattern.length) {
            i = 0;
        }
 
        let currentPattern = pattern[i];
        counter++;
        
        let innercounter = 0;
 
        for (let char of currentPattern) {
 
            if (char == '!' && innercounter == 0) {
                currentPattern = currentPattern.replace(char, sequencePattern[i][0]);
                innercounter++;
 
            } else if (char == '!' && innercounter > 0) {
                currentPattern = currentPattern.replace(char, sequencePattern[i][1]);
                innercounter = 0;
            }
        }
 
        console.log(currentPattern);
    }
}
 
printDNA(4);
// printDNA(10);