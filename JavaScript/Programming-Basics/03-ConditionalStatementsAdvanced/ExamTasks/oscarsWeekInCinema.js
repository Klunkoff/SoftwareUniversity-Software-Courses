function solve(input) {

    let movie = input[0];
    let typeHall = input[1];
    let tickets = Number(input[2]);

    let price = 0;

    switch (movie) {

        case 'A Star Is Born':

            if (typeHall === 'normal') {
                price = tickets * 7.50;
            } else if (typeHall === 'luxury') {
                price = tickets * 10.50;
            } else if (typeHall === 'ultra luxury') {
                price = tickets * 13.50;
            }

            break;

        case 'Bohemian Rhapsody':

            if (typeHall === 'normal') {
                price = tickets * 7.35;
            } else if (typeHall === 'luxury') {
                price = tickets * 9.45;
            } else if (typeHall === 'ultra luxury') {
                price = tickets * 12.75;
            }

            break;

        case 'Green Book':

            if (typeHall === 'normal') {
                price = tickets * 8.15;
            } else if (typeHall === 'luxury') {
                price = tickets * 10.25;
            } else if (typeHall === 'ultra luxury') {
                price = tickets * 13.25;
            }

            break;

        case 'The Favourite':

            if (typeHall === 'normal') {
                price = tickets * 8.75;
            } else if (typeHall === 'luxury') {
                price = tickets * 11.55;
            } else if (typeHall === 'ultra luxury') {
                price = tickets * 13.95;
            }

            break;
    }

    console.log(`${movie} -> ${price.toFixed(2)} lv.`);
}

solve(['A Star Is Born', 'luxury', '42']);
solve(['Green Book', 'normal', '63']);
solve(['The Favourite', 'ultra luxury', '34']);