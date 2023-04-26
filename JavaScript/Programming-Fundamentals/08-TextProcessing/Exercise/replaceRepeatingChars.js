function replaceRepeatingChars(string) {
 
    let resultArray = [];
    let stringArray = string.split('');
 
    for (let i = 0; i < stringArray.length; i++) {
 
        let currentChar = stringArray[i];
        let lastAddedChar = stringArray[i - 1];
 
        if (currentChar !== lastAddedChar) {
            resultArray.push(currentChar);
        }
 
        for (let j = i + 1; j < stringArray.length; j++) {
 
            let checkedChar = stringArray[j];
 
            if (currentChar !== checkedChar) {
                i = j - 1;
                break;
            }
        }
    }
 
    console.log(resultArray.join(''));
}
 
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');
// replaceRepeatingChars('qqedssaa');