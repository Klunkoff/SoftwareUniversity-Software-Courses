function loadingBar(number) {
 
    let loadingBarArray = '..........'.split('');
    let firstDigit = number / 10;
 
    if (number === 100) {
 
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
 
    } else {
 
        for (let i = 0; i < firstDigit; i++) {
 
            let substituteChar = '%';
            loadingBarArray.unshift(substituteChar);
            loadingBarArray.pop();
        }
 
        console.log(`${number}% [${loadingBarArray.join('')}]`);
        console.log(`Still loading...`);
    }
}
 
loadingBar(30);
loadingBar(50);
loadingBar(100);