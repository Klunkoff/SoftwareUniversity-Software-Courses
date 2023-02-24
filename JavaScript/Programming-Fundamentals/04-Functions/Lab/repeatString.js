function repeatString(word, repeatNum) {

    let concatenatedString = '';

    for (let i = 0; i < repeatNum; i++) {
        concatenatedString += word;
    }

    return concatenatedString;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));