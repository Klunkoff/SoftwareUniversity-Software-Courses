function printDNA3(number) {
 
    let pattern = ['**!!**', '*!--!*', '!----!', '*!--!*'];
    let sequencePattern = 'ATCGTTAGGG'.split('');
 
    for (let i = 0; i < number; i++) {
 
        let currentPattern = pattern.shift();
        let currentFirstChar = sequencePattern.shift();
        let currentSecondChar = sequencePattern.shift();
        let changedPattern = '';
        
        let innercounter = 0;
 
        for (let char of currentPattern) {
 
            if (char == '!' && innercounter == 0) {
                changedPattern = currentPattern.replace(char, currentFirstChar);
                innercounter++;
 
            } else if (char == '!' && innercounter > 0) {
                changedPattern = changedPattern.replace(char, currentSecondChar);
                innercounter = 0;
            }
        }
 
        console.log(changedPattern);
 
        pattern.push(currentPattern);
        sequencePattern.push(currentFirstChar);
        sequencePattern.push(currentSecondChar);
    }
}
 
// printDNA3(4);
printDNA3(10);