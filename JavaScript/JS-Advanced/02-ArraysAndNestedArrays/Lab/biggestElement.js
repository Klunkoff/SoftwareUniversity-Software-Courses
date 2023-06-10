function biggestElement(matrix) {
 
    let allElements = [];
    matrix.forEach(element => allElements.push(...element));
    let biggestNum = Math.max(...allElements);
 
    return biggestNum;
}
 
biggestElement([[20, 50, 10],
                [8, 33, 145]]);
biggestElement([[3, 5, 7, 12],
                [-1, 4, 33, 2],
                [8, 3, 0, 4]]);