function oddOccurrences(stringOfWords) {
 
    let arrayOfWords = stringOfWords
        .toLowerCase()
        .split(' ');
 
    let wordsObject = {};
 
    for (let word of arrayOfWords) {
 
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 1;
 
        } else {
            wordsObject[word] += 1;
        }
    }
 
    let sortedEntries = Object.entries(wordsObject).sort((a, b) => b[1] - a[1]);
 
    let resultArray = [];
 
    for (let [key, value] of sortedEntries) {
 
        if (value % 2 != 0) {
            resultArray.push(key);
        }
    }
 
    console.log(resultArray.join(' '));
}
 
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');