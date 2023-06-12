function processOddPositions(arrayOfNums) {
 
    let result = arrayOfNums
        .filter((a, index) => index % 2 != 0)
        .map((a) => a * 2)
        .reverse()
        .join(' ');
 
    return result;
}
 
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));