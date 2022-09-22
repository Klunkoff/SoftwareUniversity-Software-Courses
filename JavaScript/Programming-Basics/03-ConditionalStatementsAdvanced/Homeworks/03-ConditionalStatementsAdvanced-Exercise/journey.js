function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let place = 0;
    let spendMoney = 0;

    if (budget <= 100) {

        destination = 'Bulgaria';

        switch (season) {

            case 'summer':
                place = 'Camp';
                spendMoney = budget * 0.3; break;

            case 'winter':
                place = 'Hotel';
                spendMoney = budget * 0.7; break;
        }

    } else if (budget > 100 && budget <= 1000) {

        destination = 'Balkans';

        switch (season) {

            case 'summer':
                place = 'Camp';
                spendMoney = budget * 0.4; break;

            case 'winter':
                place = 'Hotel';
                spendMoney = budget * 0.8; break;
        }

    } else {

        destination = 'Europe';
        spendMoney = budget * 0.9;
        place = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${spendMoney.toFixed(2)}`);
}

solve(['1500', 'summer']);