function wordOccurrences(arrayOfWords) {

    let wordMap = new Map();

    for (let word of arrayOfWords) {

        if (!wordMap.has(word)) {
            wordMap.set(word, 1);

        } else {
            let value = wordMap.get(word);
            wordMap.set(word, (value += 1));
        }
    }

    let sorted = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);

    for (let [word, countNum] of sorted) {
        console.log(`${word} -> ${countNum} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"]);
// wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);