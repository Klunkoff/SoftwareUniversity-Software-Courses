function theMostPowerfulWord(input) {

    let powerfulWord = '';
    let bestScoresSum = 0;
    let command = input.shift();

    while (command !== 'End of words') {

        let currentWord = command;
        let firstCharNum = currentWord.charCodeAt(0);
        let isLowerVowel = firstCharNum == 97 || firstCharNum == 101 || firstCharNum == 105 || firstCharNum == 111 || firstCharNum == 117 || firstCharNum == 121;
        let isUpperVowel = firstCharNum == 65 || firstCharNum == 69 || firstCharNum == 73 || firstCharNum == 79 || firstCharNum == 85 || firstCharNum == 89;
        let currentWordSum = 0;

        for (let i = 0; i < currentWord.length; i++) {

            let currentCharNum = currentWord.charCodeAt(i);
            currentWordSum += currentCharNum;
        }

        if (isLowerVowel || isUpperVowel) {

            currentWordSum *= currentWord.length;

        } else {

            currentWordSum = Math.floor(currentWordSum / currentWord.length);
        }

        if (currentWordSum > bestScoresSum) {

            bestScoresSum = currentWordSum;
            powerfulWord = currentWord;
        }

        command = input.shift();
    }

    console.log(`The most powerful word is ${powerfulWord} - ${bestScoresSum}`);
}

// theMostPowerfulWord(["The",
//     "Most",
//     "Powerful",
//     "Word",
//     "Is",
//     "Experience",
//     "End of words"]);
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);