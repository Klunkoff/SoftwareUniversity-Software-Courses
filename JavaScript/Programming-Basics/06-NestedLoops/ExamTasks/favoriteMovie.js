function favoriteMovie(input) {

    let bestMovie = '';
    let bestScores = 0;
    let movieCounter = 0;

    let command = input.shift();

    while (command !== 'STOP') {

        let currentMovie = command;
        let currentMovieScores = 0;
        movieCounter++;

        if (movieCounter == 7) {

            console.log(`The limit is reached.`);
            break;
        }

        for (let i = 0; i < currentMovie.length; i++) {

            let currentCharNum = currentMovie.charCodeAt(i);

            if (currentCharNum >= 97 && currentCharNum <= 122) {

                currentCharNum -= (currentMovie.length * 2);
                currentMovieScores += currentCharNum;

            } else if (currentCharNum >= 65 && currentCharNum <= 90) {

                currentCharNum -= currentMovie.length;
                currentMovieScores += currentCharNum;

            } else {

                currentMovieScores += currentCharNum;
            }
        }

        if (currentMovieScores > bestScores) {

            bestScores = currentMovieScores;
            bestMovie = currentMovie;
        }

        command = input.shift();
    }

    console.log(`The best movie for you is ${bestMovie} with ${bestScores} ASCII sum.`);
}

favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);