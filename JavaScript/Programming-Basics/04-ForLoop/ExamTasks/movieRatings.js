function solve(input) {

    let index = 0;
    let movieNumber = Number(input[index]);
    index++;

    let movieName = input[index];
    index++;
    let movieRating = Number(input[index]);
    index++;

    let highestRate = 0;
    let lowestRate = 10;
    let averageRate = 0;

    let highestMovieName = '';
    let lowestMovieName = '';

    for (let i = 1; i <= movieNumber; i++) {

        averageRate += movieRating;

        if (movieRating > highestRate) {

            highestRate = movieRating;
            highestMovieName = movieName;

        } else if (movieRating < lowestRate) {

            lowestRate = movieRating;
            lowestMovieName = movieName;
        }

        movieName = input[index];
        index++;
        movieRating = Number(input[index]);
        index++;
    }

    let averageResult = averageRate / movieNumber;

    console.log(`${highestMovieName} is with highest rating: ${highestRate.toFixed(1)}`);
    console.log(`${lowestMovieName} is with lowest rating: ${lowestRate.toFixed(1)}`);
    console.log(`Average rating: ${averageResult.toFixed(1)}`);
}

solve(["5", "A Star is Born", "7.8", "Creed 2", "7.3",
    "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
// solve(["4","Interstellar","8.5","Dangal","8.3","Green Book","8.2"]);