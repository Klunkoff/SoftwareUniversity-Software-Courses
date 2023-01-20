function rightPlace(string1, char, string2) {

    let firstString = string1;
    let secondString = string2;
    let charReplacement = char;
    let correctWord = '';

    for (let i = 0; i < firstString.length; i++) {

        if (firstString[i] == '_') {
            correctWord += charReplacement;

        } else {
            correctWord += firstString[i];
        }
    }

    let result = correctWord == secondString ? `Matched` : `Not Matched`;
    console.log(result);

    // if (correctWord == secondString) {
    //     console.log(`Matched`);

    // } else {
    //     console.log(`Not Matched`);
    // }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');