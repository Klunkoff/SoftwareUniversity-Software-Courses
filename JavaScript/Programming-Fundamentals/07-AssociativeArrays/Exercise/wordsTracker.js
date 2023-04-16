function wordsTracker(arrayOfWords) {
 
    let wordTrackerObject = {};
    let trackedWordsArray = arrayOfWords
        .shift()
        .split(' ');
 
    for (let word of trackedWordsArray) {
        wordTrackerObject[word] = 0;
    }
 
    for (let searchedWord of arrayOfWords) {
 
        if (wordTrackerObject.hasOwnProperty(searchedWord)) {
            wordTrackerObject[searchedWord] += 1;
        }
    }
 
    let sortedArray = Object.entries(wordTrackerObject).sort((a, b) => b[1] - a[1]);
 
    for (let [word, counter] of sortedArray) {
        console.log(`${word} - ${counter}`);
    }
}
 
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the',
    'And', 'finally', 'the', 'the', 'sentence']);