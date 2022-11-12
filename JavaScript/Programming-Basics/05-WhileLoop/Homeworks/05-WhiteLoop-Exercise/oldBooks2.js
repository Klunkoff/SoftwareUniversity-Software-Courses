function solve(input) {

    let index = 0;
    let searshedBook = input[index];
    index++;
    let countBook = input[index];
    let checkedBooks = 0;
    let bookIsFound = false;

    while (countBook !== 'No More Books') {

        checkedBooks++;
        countBook = input[index];

        if (searshedBook === countBook) {

            bookIsFound = true;

            break;
        }

        index++;
    }

    if (bookIsFound === false) {

        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks - 1} books.`);

    } else {

        console.log(`You checked ${checkedBooks - 1} books and found it.`);
    }
}

solve(["Troy", "Stronger", "Life Style", "Troy"]);
// solve(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
// solve(["Bourne","True Story","Forever","More Space",
// "The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);