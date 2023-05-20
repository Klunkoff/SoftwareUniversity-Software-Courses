function memoryGame(arrayOfElements) {

    let gameArray = arrayOfElements.shift().split(' ');
    let playerArray = arrayOfElements.slice();

    let index = 0;
    let command = arrayOfElements[index];
    index++;

    let moves = 0;
    let isWin = false;

    while (command != 'end') {

        moves++;

        let elementArray = playerArray
            .shift()
            .split(' ')
            .map(Number);

        let firstIndex = elementArray.shift();
        let secondIndex = elementArray.shift();

        let firstElement = gameArray[firstIndex];
        let secondElement = gameArray[secondIndex];

        let isNotInIndexRange = (firstIndex == secondIndex) || firstIndex < 0 ||
            firstIndex >= gameArray.length || secondIndex < 0 || secondIndex >= gameArray.length;

        if (isNotInIndexRange) {
            let indexToPlace = gameArray.length / 2;
            gameArray.splice(indexToPlace, 0, `-${moves}a`, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`);

        } else if (firstElement == secondElement) {

            if (secondIndex > firstIndex) {
                gameArray.splice(secondIndex, 1);
                gameArray.splice(firstIndex, 1);

            } else {
                gameArray.splice(firstIndex, 1);
                gameArray.splice(secondIndex, 1);
            }

            console.log(`Congrats! You have found matching elements - ${firstElement}!`);

        } else if (firstElement != secondElement) {
            console.log(`Try again!`);
        }

        if (gameArray.length == 0) {
            isWin = true;

            break;
        }

        command = arrayOfElements[index];
        index++;
    }

    if (isWin) {
        console.log(`You have won in ${moves} turns!`);

    } else {
        console.log(`Sorry you lose :(
            ${gameArray.join(' ')}`);
    }
}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0","-1 0","1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2","0 1","0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
