function spiralMatrix(rows, cols) {

    let matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

    let startRow = 0;
    let endRow = rows - 1;

    let startCol = 0;
    let endCol = cols - 1;

    let count = 1;

    while (startRow <= endRow && startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = count++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = count++;
        }

        endCol--;

        if (startRow <= endRow) {

            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = count++;
            }

            endRow--;
        }

        if (startCol <= endCol) {

            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = count++;
            }

            startCol++;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);