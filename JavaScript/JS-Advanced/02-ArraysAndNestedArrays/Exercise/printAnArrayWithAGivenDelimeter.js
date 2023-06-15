function printAnArrayWithAGivenDelimeter(stringArray, delimeter) {

    let result = stringArray.join(delimeter);

    console.log(result);
}

printAnArrayWithAGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
printAnArrayWithAGivenDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');