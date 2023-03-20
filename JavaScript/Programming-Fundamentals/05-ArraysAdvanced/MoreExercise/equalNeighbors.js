function equalNeighbors(matrix) {
 
    pairsCounter = 0;
 
    for (let i = 0; i < matrix.length; i++) {
 
        for (let j = 0; j < matrix[i].length; j++) {
 
            let mainElement = matrix[i][j];
            let rowElement = matrix[i][j + 1];
            let columnElement;
 
            if (i + 1 < matrix.length) {
                columnElement = matrix[i + 1][j];
            }
 
            if (mainElement === rowElement) {
                pairsCounter++;
            }
 
            if (mainElement === columnElement) {
                pairsCounter++;
            }
        }
    }
 
    return pairsCounter;
}
 
// equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);