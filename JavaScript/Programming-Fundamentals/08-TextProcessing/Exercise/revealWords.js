function revealWords(words, text) {
 
    let wordsForReplacingArray = words.split(', ');
    let textArray = text.split(' ');
    let searchedChar = '*';
 
    for (let word of textArray) {
 
        if (word.includes(searchedChar)) {
 
            for (let replacingWord of wordsForReplacingArray) {
 
                if (replacingWord.length === word.length) {
                    let index = textArray.indexOf(word);
                    textArray[index] = replacingWord;
                }
            }
        }
    }
 
    console.log(textArray.join(' '));
}
 
revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');