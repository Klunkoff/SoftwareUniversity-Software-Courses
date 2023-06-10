function biggestElement2(matrix) {
 
    let allElements = [];
 
    for (let array of matrix) {
        allElements.push(...array);
    }
 
    let biggestNum = Math.max(...allElements);
 
    return biggestNum;
}
 
biggestElement2([[20, 50, 10],
[8, 33, 145]]);
biggestElement2([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);