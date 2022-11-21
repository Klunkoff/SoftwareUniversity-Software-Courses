function solve(input) {

    let index = 0;
    let searshedBook = input[index];
    index++;
    let countBook = input[index];
    let checkedBooks = 0;

    while (countBook !== 'No More Books') {

        countBook = input[index];

        if (searshedBook === countBook) {

            console.log(`You checked ${checkedBooks} books and found it.`);

            break;
        }

        index++;
        checkedBooks++;
    }

    if (countBook === 'No More Books') {

        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks - 1} books.`);
    }
}

solve(["Troy", "Stronger", "Life Style", "Troy"]);
// solve(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
// solve(["Bourne","True Story","Forever","More Space",
// "The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);