function wordsUppercase(stringData) {
 
    let patternWords = /\w+/g;
    let wordsArray = stringData.match(patternWords);
    let wordsToUppercaseArray = [];
 
    for (let word of wordsArray) {
 
        let currentWords = word.toUpperCase();
        wordsToUppercaseArray.push(currentWords);
    }
 
    console.log(wordsToUppercaseArray.join(', '));
}
 
wordsUppercase('Hi, how are you?');