function asciiSumator(inputArray) {

    let firstCharNum = inputArray.shift().charCodeAt(0);
    let secondCharNum = inputArray.shift().charCodeAt(0);
    let string = inputArray.shift();

    let biggerNum = Math.max(firstCharNum, secondCharNum);
    let smallerNum = Math.min(firstCharNum, secondCharNum);
    let totalCharSum = 0;

    for (char of string) {

        let currentCharNum = char.charCodeAt(0);

        if (currentCharNum > smallerNum && currentCharNum < biggerNum) {
            totalCharSum += currentCharNum;
        }
    }

    console.log(totalCharSum);
}

asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
asciiSumator(['?',
    'E',
    '@ABCEF']);
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);