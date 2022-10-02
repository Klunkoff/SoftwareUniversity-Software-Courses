function solve(input) {

    let movie = input[0];
    let moviePackage = input[1];
    let tickets = Number(input[2]);

    let price = 0;

    switch (movie) {

        case 'John Wick':

            if (moviePackage === 'Drink') {
                price = tickets * 12;
            } else if (moviePackage === 'Popcorn') {
                price = tickets * 15;
            } else if (moviePackage === 'Menu') {
                price = tickets * 19;
            }

            break;

        case 'Star Wars':

            if (moviePackage === 'Drink') {
                price = tickets * 18;
            } else if (moviePackage === 'Popcorn') {
                price = tickets * 25;
            } else if (moviePackage === 'Menu') {
                price = tickets * 30;
            }

            break;

        case 'Jumanji':

            if (moviePackage === 'Drink') {
                price = tickets * 9;
            } else if (moviePackage === 'Popcorn') {
                price = tickets * 11;
            } else if (moviePackage === 'Menu') {
                price = tickets * 14;
            }

            break;
    }

    if (movie === 'Star Wars' && tickets >= 4) {
        price = price * 0.70;
    }

    if (movie === 'Jumanji' && tickets === 2) {
        price = price * 0.85;
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}

solve(['John Wick', 'Drink', '6']);
solve(['Star Wars', 'Popcorn', '4']);
solve(['Jumanji', 'Menu', '2']);


