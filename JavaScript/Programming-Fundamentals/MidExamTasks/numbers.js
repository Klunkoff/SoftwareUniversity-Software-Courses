function numbers(stringWithNumbers) {
 
    let array = stringWithNumbers
        .split(' ')
        .map(Number);
 
    let allNumbers = array.length;
    let sumArray = 0;
    let biggerNumsArray = [];
 
    for (let num of array) {
        sumArray += num;
    }
 
    let averageNumber = (sumArray / allNumbers);
 
    for (let num of array) {
 
        if (num > averageNumber) {
            biggerNumsArray.push(num);
        }
    }
 
    let resultArray = biggerNumsArray
        .sort((a, b) => b - a)
        .slice(0, 5);
 
    if (biggerNumsArray < 1) {
        console.log(`No`);
        return;
    }
 
    console.log(resultArray.join(' '));
}
 
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
numbers('1 1 1 1 1');