function solve(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysNumber = Number(input[3]);

    let price = 0;

    switch (destination) {

        case 'Dubai':

            if (season === 'Winter') {
                price = daysNumber * 45000;
            } else if (season === 'Summer') {
                price = daysNumber * 40000;
            }

            break;

        case 'Sofia':

            if (season === 'Winter') {
                price = daysNumber * 17000;
            } else if (season === 'Summer') {
                price = daysNumber * 12500;
            }

            break;

        case 'London':

            if (season === 'Winter') {
                price = daysNumber * 24000;
            } else if (season === 'Summer') {
                price = daysNumber * 20250;
            }

            break;
    }
    
    if (destination === 'Dubai') {
        price = price * 0.70;
    } else if (destination === 'Sofia') {
        price = price + (price * 0.25);
    }

    let diff = Math.abs(budget - price);

    if (budget > price) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}

solve(['400000', 'Sofia', 'Winter', '20']);
solve(['1000000', 'Dubai', 'Summer', '5']);
solve(['200000', 'London', 'Summer', '7']);
