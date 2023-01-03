function nameGame(input) {

    let firstName = input.shift();
    let firstNameTotalScores = 0;

    for (let i = 0; i < firstName.length; i++) {

        let currentChar = firstName.charCodeAt(i);
        let currentScore = Number(input.shift());

        if (currentChar === currentScore) {

            firstNameTotalScores += 10;

        } else {

            firstNameTotalScores += 2;
        }
    }

    let secondName = input.shift();
    let secondNameTotalScores = 0;

    for (let j = 0; j < secondName.length; j++) {

        let currentChar = secondName.charCodeAt(j);
        let currentScore = Number(input.shift());

        if (currentChar === currentScore) {

            secondNameTotalScores += 10;

        } else {

            secondNameTotalScores += 2;
        }
    }

    let name = '';
    let scores = 0;

    if (firstNameTotalScores === secondNameTotalScores) {

        name = secondName;
        scores = secondNameTotalScores;

    } else if (firstNameTotalScores > secondNameTotalScores) {

        name = firstName;
        scores = firstNameTotalScores

    } else if (secondNameTotalScores > firstNameTotalScores) {

        name = secondName;
        scores = secondNameTotalScores
    }

    console.log(`The winner is ${name} with ${scores} points!`);
}