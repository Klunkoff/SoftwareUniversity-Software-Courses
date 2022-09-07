function solve(input) {

    let kilometers = input[0];
    let kindOfDay = input[1];

    let price = 0;

    if (kilometers < 20) {

        price += 0.70;

        switch (kindOfDay) {

            case 'day': price += kilometers * 0.79; break;
            case 'night': price += kilometers * 0.90; break;
        }

    } else if (kilometers < 100) {

        switch (kindOfDay) {

            case 'day':
            case 'night': price += kilometers * 0.09; break;
        }

    } else {

        switch (kindOfDay) {

            case 'day':
            case 'night': price += kilometers * 0.06; break;
        }
    }

    console.log(price.toFixed(2));
}

solve([5, 'day']);
solve([7, 'night']);
solve([25, 'day']);
solve([180, 'night']);