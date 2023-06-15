function rotateArray(stringArray, rotationNum) {
 
    for (let i = 0; i < rotationNum; i++) {
 
        let lastElement = stringArray.pop();
        stringArray.unshift(lastElement);
    }
 
    console.log(stringArray.join(' '));
}
 
rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);