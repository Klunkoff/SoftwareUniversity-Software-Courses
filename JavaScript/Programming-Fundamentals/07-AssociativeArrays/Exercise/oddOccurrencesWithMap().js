function oddOccurrencesWithMap(stringOfWords) {

    let arrayOfWords = stringOfWords
        .toLowerCase()
        .split(' ');

    let wordsMap = new Map();

    for (let word of arrayOfWords) {

        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);

        } else {
            let currentValue = wordsMap.get(word);
            wordsMap.set(word, currentValue + 1);
        }
    }

    let resultArray = [];

    for (let [key, value] of Array.from(wordsMap)) {

        if (value % 2 != 0) {
            resultArray.push(key);
        }
    }

    console.log(resultArray.join(' '));
}

oddOccurrencesWithMap('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrencesWithMap('Cake IS SWEET is Soft CAKE sweet Food');