function solve(input) {

    let season = input[0];
    let kilometers = Number(input[1]);

    let salary = 0;

    if (kilometers <= 5000) {

        switch (season) {

            case 'Spring':
            case 'Autumn': salary = (kilometers * 0.75) * 4; break;
            case 'Summer': salary = (kilometers * 0.90) * 4; break;
            case 'Winter': salary = (kilometers * 1.05) * 4; break;
        }

    } else if (kilometers <= 10000) {

        switch (season) {

            case 'Spring':
            case 'Autumn': salary = (kilometers * 0.95) * 4; break;
            case 'Summer': salary = (kilometers * 1.10) * 4; break;
            case 'Winter': salary = (kilometers * 1.25) * 4; break;
        }

    } else {

        salary = (kilometers * 1.45) * 4;
    }

    salary *= 0.90;

    console.log(salary.toFixed(2));
}

// solve(['Summer', '3455']);
// solve(['Winter', '4350']);
solve(['Autumn', '8600']);