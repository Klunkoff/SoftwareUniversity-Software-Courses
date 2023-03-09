function firstAndLastKNumbers(arrayOfNums) {
 
    let k = arrayOfNums.shift();
 
    let firstKElements = arrayOfNums.slice(0, k);
    let lastKElements = arrayOfNums.slice(-k);
 
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
 
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);