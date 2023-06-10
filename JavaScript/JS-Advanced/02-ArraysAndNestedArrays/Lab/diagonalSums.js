function diagonalSums(matrix) {
 
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let counter = 0;
 
    for (let i = 0; i < matrix.length; i++) {
        sumMainDiagonal += matrix[i][i];
    }
 
    for (let j = matrix.length - 1; j >= 0; j--) {
        sumSecondaryDiagonal += matrix[j][counter];
        counter++;
    }
 
    console.log(sumMainDiagonal + ' ' + sumSecondaryDiagonal);
}
 
diagonalSums([[20, 40],
[10, 60]]);
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);