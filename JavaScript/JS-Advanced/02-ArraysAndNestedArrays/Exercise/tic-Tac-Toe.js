function ticTacToe(gameArray) {
 
    let gameBoard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
 
    let gameCounter = 0;
 
    for (let move of gameArray) {
 
        let [rowIndex, columnIndex] = move.split(' ');
        rowIndex = Number(rowIndex);
        columnIndex = Number(columnIndex);
        gameCounter++;
 
        if (gameCounter == 1) {
 
            let playerX = "X";
 
            if (gameBoard[rowIndex][columnIndex] !== false) {
                console.log(`This place is already taken. Please choose another!`);
                gameCounter--;
 
            } else {
 
                gameBoard[rowIndex][columnIndex] = playerX;
 
                let result = checkResult(playerX);
 
                if (result) {
                    break;
                }
            }
 
        } else if (gameCounter == 2) {
 
            let playerO = "O";
 
            if (gameBoard[rowIndex][columnIndex] !== false) {
                console.log(`This place is already taken. Please choose another!`);
                gameCounter--;
 
            } else {
                gameBoard[rowIndex][columnIndex] = playerO;
                gameCounter = 0;
 
                let result = checkResult(playerO);
 
                if (result) {
                    break;
                }
            }
        }
    }
 
    function checkResult(player) {
 
        //check gameboard for free space
 
        let isFull = true;
 
        for (let row of gameBoard) {
 
            if (row.includes(false)) {
                isFull = false;
 
                break;
            }
        }
 
        if (isFull) {
            console.log(`The game ended! Nobody wins :(`);
 
            return true;
        }
 
        // row check
 
        for (let row of gameBoard) {
 
            rowCounter = 0;
 
            row.forEach(element => {
 
                if (element == player) {
                    rowCounter++;
                }
            });
 
            if (rowCounter == 3) {
                console.log(`Player ${player} wins!`);

                return true;
            }
        }
 
        // column check
 
        for (let i = 0; i < gameBoard.length; i++) {
 
            let columnCounter = 0;
 
            for (let j = 0; j < gameBoard.length; j++) {
 
                let element = gameBoard[j][i];
 
                if (element == player) {
                    columnCounter++;
                }
            }
 
            if (columnCounter == 3) {
                console.log(`Player ${player} wins!`);
                return true;
            }
        }
 
        // first diagonal check
 
        let firstDiagonalCounter = 0;
 
        for (let i = 0; i < gameBoard.length; i++) {
 
            let element = gameBoard[i][i];
 
            if (element == player) {
                firstDiagonalCounter++;
            }
 
            if (firstDiagonalCounter == 3) {
                console.log(`Player ${player} wins!`);
                return true;
            }
        }
 
        //second diagonal check
 
        let secondDiagonalCounter = 0;
 
        for (let i = 0; i < gameBoard.length; i++) {
 
            let element = gameBoard[i][(gameBoard.length - 1) - i];
 
            if (element == player) {
                secondDiagonalCounter++;
            }
 
            if (secondDiagonalCounter == 3) {
                console.log(`Player ${player} wins!`);

                return true;
            }
        }
    }
 
    for (let row of gameBoard) {
        console.log(row.join('\t'));
    }
}
 
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);