function stringSubstring(searchedWord, text) {

    let lowerCaseSearchedWord = searchedWord.toLowerCase();
    let lowerCaseText = text.toLowerCase();
    let lowerCaseTextArray = lowerCaseText.split(' ');

    for (let word of lowerCaseTextArray) {

        if (word == lowerCaseSearchedWord) {
            console.log(searchedWord);

            return;
        }
    }

    console.log(`${searchedWord} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language javascript');
stringSubstring('python',
    'JavaScript is the best programming language');