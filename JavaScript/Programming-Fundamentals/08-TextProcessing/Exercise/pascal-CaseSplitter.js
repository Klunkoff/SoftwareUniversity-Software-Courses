function pascalCaseSplitter(text) {
 
    let textArray = [];
 
    for (let i = 0; i < text.length; i++) {
 
        let currentWordArray = [];
        let upperCaseChar = text[i];
        let asciiIndexUpperChar = text.charCodeAt(i);
        let isUpperChar = asciiIndexUpperChar >= 65 && asciiIndexUpperChar <= 90;
 
        if (isUpperChar) {
            currentWordArray.push(upperCaseChar);
 
            for (let j = i + 1; j < text.length; j++) {
 
                let lowerCaseChar = text[j];
                let asciiIndexLowerChar = text.charCodeAt(j);
                let isLowerChar = asciiIndexLowerChar >= 65 && asciiIndexLowerChar <= 90;
 
                if (!isLowerChar) {
                    currentWordArray.push(lowerCaseChar);
                    i++;
 
                } else {
                    i = j - 1;
                    break;
                }
            }
        }
 
        textArray.push(currentWordArray.join(''));
    }
 
    console.log(textArray.join(', '));
}
 
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');