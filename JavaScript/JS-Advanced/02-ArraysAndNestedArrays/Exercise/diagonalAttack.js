function diagonalAttack(stringArray) {

    let matrix = [];
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let secondDiagonalIndex = stringArray.length - 1;

    for (let string of stringArray) {

        let currentArrayOfNums = string.split(' ').map(Number);
        matrix.push(currentArrayOfNums);
    }

    for (let i = 0; i < matrix.length; i++) {

        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][secondDiagonalIndex];

        matrix[i][i] = String(matrix[i][i]);
        matrix[i][secondDiagonalIndex] = String(matrix[i][secondDiagonalIndex]);
        secondDiagonalIndex--;
    }

    if (firstDiagonalSum === secondDiagonalSum) {

        for (let row of matrix) {

            for (let j = 0; j < matrix.length; j++) {

                if (typeof row[j] !== 'string') {
                    row[j] = firstDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(element => console.log(element.join(' ')));
}

// diagonalAttack(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);