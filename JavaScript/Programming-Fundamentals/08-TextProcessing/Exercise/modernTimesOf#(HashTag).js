function modernTimesOfHashTag(text) {
 
    let textArray = text.split(' ');
    let hashTag = '#';
 
    for (let word of textArray) {
 
        if (word.includes(hashTag) && word.length > 1) {
 
            isAllChars = true;
            let modifiedWord = word.substring(1);
            let modifiedWordArray = modifiedWord.split('');
 
            for (let char of modifiedWordArray) {
 
                let asciiNumber = modifiedWord.charCodeAt(char);
 
                if (asciiNumber >= 65 && asciiNumber <= 90 || asciiNumber >= 97 && asciiNumber <= 122) {
                    isAllChars = true;
 
                } else {
                    isAllChars = false;
                    break;
                }
            }
 
            if (isAllChars) {
                console.log(modifiedWord);
            }
        }
    }
}
 
// modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');