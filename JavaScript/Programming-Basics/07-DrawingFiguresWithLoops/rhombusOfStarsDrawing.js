function solve(number) {
 
    for (let i = number; i > 0; i--) {
 
        let star = '';
 
        for (let j = 1; j < i; j++) {
 
            star += ' ';
        }
 
        for (let k = i; k <= number; k++) {
 
            star += '* ';
        }
 
        console.log(star);
    }
 
    for (let i = 1; i < number; i++) {
 
        let star = '';
 
        for (let j = 1; j <= i; j++) {
 
            star += ' ';
        }
 
        for (let k = number; k > i; k--) {
 
            star += '* ';
        }
 
        console.log(star);
    }
}
 
solve(8);