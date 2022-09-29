function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let placeType = "";
    let destination = "";

    if (budget <= 1000) {

        placeType = 'Camp';

        switch (season) {

            case 'Summer': destination = 'Alaska'; budget *= 0.65; break;
            case 'Winter': destination = 'Morocco'; budget *= 0.45; break;
        }

    } else if (budget <= 3000) {

        placeType = 'Hut';

        switch (season) {

            case 'Summer': destination = 'Alaska'; budget *= 0.80; break;
            case 'Winter': destination = 'Morocco'; budget *= 0.60; break;
        }

    } else {

        placeType = 'Hotel';

        switch (season) {

            case 'Summer': destination = 'Alaska'; budget *= 0.90; break;
            case 'Winter': destination = 'Morocco'; budget *= 0.90; break;
        }
    }

    console.log(`${destination} - ${placeType} - ${budget.toFixed(2)}`);
}

// solve(['800', 'Summer']);
// solve(['799.50', 'Winter']);
// solve(['3460', 'Summer']);
solve(['1100', 'Summer']);