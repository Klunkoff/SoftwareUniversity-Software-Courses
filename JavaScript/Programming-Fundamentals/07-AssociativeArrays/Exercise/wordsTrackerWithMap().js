function wordsTrackerWithMap(arrayOfWords) {
 
    let wordTrackerMap = new Map ();
    let trackedWordsArray = arrayOfWords
        .shift()
        .split(' ');
 
    for (let word of trackedWordsArray) {
        wordTrackerMap.set(word, 0);
    }
 
    for (let searchedWord of arrayOfWords) {
 
        if (wordTrackerMap.has(searchedWord)) {
           let oldValue = wordTrackerMap.get(searchedWord);
           wordTrackerMap.set(searchedWord, (oldValue + 1));
        }
    }
 
    let sortedArray = Array.from(wordTrackerMap).sort((a, b) => b[1] - a[1]);
 
    for (let [word, counter] of sortedArray) {
        console.log(`${word} - ${counter}`);
    }
}
 
wordsTrackerWithMap([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordsTrackerWithMap([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the',
    'And', 'finally', 'the', 'the', 'sentence']);