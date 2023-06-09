function wordsUppercase(stringData) {
 
    let patternWords = /\w+/g;
    let wordsArray = stringData
        .toUpperCase()
        .match(patternWords);
 
    console.log(wordsArray.join(', '));
}
 
wordsUppercase('Hi, how are you?');