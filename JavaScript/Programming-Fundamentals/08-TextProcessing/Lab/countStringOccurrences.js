function countStringOccurrences(text, searchWord) {
 
    let textArray = text.split(' ');
    let resultArray = textArray.filter((a) => a == searchWord);
    let result = resultArray.length;
 
    console.log(result);
}
 
countStringOccurrences('This is a word and it also is a sentence',
    'is');
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni');