function printDNA2(number) {
 
    let patternArray = 'ATCGTTAGGG'.split('');
 
    for (let i = 1; i <= number; i++) {
 
        let [a, b] = patternArray.splice(0, 2);
 
        if (i % 4 === 1) {
            console.log(`**${a}${b}**`);
        }
 
        else if (i % 4 === 2) {
            console.log(`*${a}--${b}*`);
        }
 
        else if (i % 4 === 3) {
            console.log(`${a}----${b}`);
        }
 
        else if (i % 4 === 0) {
            console.log(`*${a}--${b}*`);
        }
 
        patternArray.push(a);
        patternArray.push(b);
    }
}
 
printDNA2(4);