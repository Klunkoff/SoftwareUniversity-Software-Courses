function diagonalSums2(matrix) {
 
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let counter = matrix.length - 1;
 
    for (let i = 0; i < matrix.length; i++) {
 
        sumMainDiagonal += matrix[i][i];
        sumSecondaryDiagonal += matrix[i][counter];
        counter--;
    }
 
    console.log(sumMainDiagonal + ' ' + sumSecondaryDiagonal);
}
 
diagonalSums2([[20, 40],
[10, 60]]);
diagonalSums2([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);