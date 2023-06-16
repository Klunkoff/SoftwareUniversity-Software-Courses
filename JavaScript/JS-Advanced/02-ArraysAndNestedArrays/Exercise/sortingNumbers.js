function sortingNumbers(numberArray) {
 
    let resultArray = [];
    let sortedNumbers = numberArray.sort((a, b) => a - b);
 
    while (numberArray.length !== 0) {
 
        firstElement = sortedNumbers.shift();
        lastElement = sortedNumbers.pop();
        resultArray.push(firstElement);
        resultArray.push(lastElement);
    }
 
    return resultArray;
}
 
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));