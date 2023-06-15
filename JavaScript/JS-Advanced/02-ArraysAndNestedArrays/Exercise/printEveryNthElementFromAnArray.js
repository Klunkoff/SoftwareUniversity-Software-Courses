function printEveryNthElementFromAnArray(stringArray, step) {

    let result = [];

    for (let i = 0; i < stringArray.length; i += step) {
        result.push(stringArray[i]);
    }

    return result;
}

printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
printEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2);
printEveryNthElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6);