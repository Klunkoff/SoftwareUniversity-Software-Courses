function hardWords2(inputData) {
 
    let text = inputData.shift();
    let wordsAray = inputData.shift();
    let missingWordsArray = [];
 
    for (word of wordsAray) {
 
        let missingWord = '_'.repeat(word.length);
        missingWordsArray.push(missingWord);
    }
 
    let sortedWordsArray = wordsAray.sort((a, b) => b.length - a.length);
    let sortedMissingWordsArray = missingWordsArray.sort((a, b) => b.length - a.length)
 
    // the replace metod doesn't work correctly if the sort metod is a - b...
 
    for (let i = 0; i < sortedWordsArray.length; i++) {
        text = text.replace(sortedMissingWordsArray[i], sortedWordsArray[i]);
    }
 
    console.log(text);
}
 
hardWords2(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);