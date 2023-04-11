function wordOccurrences(arrayOfWords) {

    let wordObject = {};

    for (let word of arrayOfWords) {

        let counter = 0;

        if (!wordObject.hasOwnProperty(word)) {
            counter++;
            wordObject[word] = counter;

        } else {
            counter++;
            wordObject[word] += counter;
        }
    }

    let sorted = Object.entries(wordObject).sort((a, b) => b[1] - a[1]);

    for (let [word, countNum] of sorted) {
        console.log(`${word} -> ${countNum} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"]);
// wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);