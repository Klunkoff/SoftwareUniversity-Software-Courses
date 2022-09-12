function solve(input) {

    let budget = Number(input[0]);
    let fuelInLiters = Number(input[1]);
    let day = input[2];

    let costs = (fuelInLiters * 2.1) + 100;

    if (day === 'Saturday') {

        costs = costs - (costs * 0.1);

    } else {

        costs = costs - (costs * 0.2);
    }

    if (budget >= costs) {

        let result = budget - costs;
        console.log(`Safari time! Money left: ${result.toFixed(2)} lv.`);

    } else {

        let result = costs - budget;
        console.log(`Not enough money! Money needed: ${result.toFixed(2)} lv.`);
    }
}

solve(['1000', '10', 'Sunday']);
solve(['120', '30', 'Saturday']);