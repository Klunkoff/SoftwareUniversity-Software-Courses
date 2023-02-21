function orbit(args) {

    let [width, height, x, y] = args;
    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push(new Array(width).fill(0));
    }

    let num = 1;
    matrix[x][y] = num;

    while (true) {
        let isChanged = false;

        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {

                if (matrix[row][col] === num) {

                    // check if surrounding cells are inside the matrix

                    if (row - 1 >= 0 && col - 1 >= 0 && matrix[row - 1][col - 1] === 0) {
                        matrix[row - 1][col - 1] = num + 1;
                        isChanged = true;
                    }

                    if (row - 1 >= 0 && matrix[row - 1][col] === 0) {
                        matrix[row - 1][col] = num + 1;
                        isChanged = true;
                    }

                    if (row - 1 >= 0 && col + 1 < width && matrix[row - 1][col + 1] === 0) {
                        matrix[row - 1][col + 1] = num + 1;
                        isChanged = true;
                    }

                    if (col + 1 < width && matrix[row][col + 1] === 0) {
                        matrix[row][col + 1] = num + 1;
                        isChanged = true;
                    }

                    if (row + 1 < height && col + 1 < width && matrix[row + 1][col + 1] === 0) {
                        matrix[row + 1][col + 1] = num + 1;
                        isChanged = true;
                    }

                    if (row + 1 < height && matrix[row + 1][col] === 0) {
                        matrix[row + 1][col] = num + 1;
                        isChanged = true;
                    }

                    if (row + 1 < height && col - 1 >= 0 && matrix[row + 1][col - 1] === 0) {
                        matrix[row + 1][col - 1] = num + 1;
                        isChanged = true;
                    }

                    if (col - 1 >= 0 && matrix[row][col - 1] === 0) {
                        matrix[row][col - 1] = num + 1;
                        isChanged = true;
                    }
                }
            }
        }

        if (!isChanged) {
            break;
        }

        num++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

orbit([3, 3, 1, 0]);