function streamOfLetters(inputArray) {
 
    let pattern = /[A-Za-z]/;
    let keyChars = 'con';
    let findedKeyChars = [];
    let result = '';
    let currentWord = '';
 
    let char = inputArray.shift();
 
    while (char !== 'End') {
 
        if (!pattern.test(char)) {
 
            char = inputArray.shift();
            continue;
        }
 
        if (!keyChars.includes(char)) {
 
            currentWord += char;
 
        } else {
 
            if (!findedKeyChars.includes(char)) {
 
                findedKeyChars.push(char);
 
            } else {
 
                currentWord += char;
            }
        }
 
        if (findedKeyChars.length == 3) {
 
            result += currentWord + ' ';
            currentWord = '';
            findedKeyChars = [];
        }
 
        char = inputArray.shift();
    }
 
    console.log(result);
}
 
streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);