function solve(input) {

    let budget = Number(input[0]);
    let ticket = input[1];
    let people = input[2];

    if (people < 5) {
        budget -= budget * 0.75;
    } else if (people < 10) {
        budget -= budget * 0.60;
    } else if (people < 25) {
        budget -= budget * 0.50;
    } else if (people < 50) {
        budget -= budget * 0.40;
    } else {
        budget -= budget * 0.25;
    }

    switch (ticket) {

        case 'Normal': budget -= people * 249.99; break;
        case 'VIP': budget -= people * 499.99; break;
    }

    if (budget >= 0) {
        console.log(`Yes! You have ${budget.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget).toFixed(2)} leva.`);
    }
}

// solve(['1000', 'Normal', '1']);
// solve(['30000', 'VIP', '49']);
solve(['50000', 'Normal', '200']);