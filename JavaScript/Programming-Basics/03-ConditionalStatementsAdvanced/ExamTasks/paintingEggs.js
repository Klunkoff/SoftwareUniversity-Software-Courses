function solve(input) {

    let size = input[0];
    let color = input[1];
    let number = Number(input[2]);

    let price = 0;

    if (size === 'Large') {

        switch (color) {

            case 'Red': price = number * 16; break;
            case 'Green': price = number * 12; break;
            case 'Yellow': price = number * 9; break;
        }

    } else if (size === 'Medium') {

        switch (color) {

            case 'Red': price = number * 13; break;
            case 'Green': price = number * 9; break;
            case 'Yellow': price = number * 7; break;
        }

    } else {

        switch (color) {

            case 'Red': price = number * 9; break;
            case 'Green': price = number * 8; break;
            case 'Yellow': price = number * 5; break;
        }
    }

    price = price * 0.65;
    console.log(`${price.toFixed(2)} leva.`);
}

solve(['Large', 'Red', '7']);
solve(['Medium', 'Green', '5']);
solve(['Small', 'Yellow', '3']);