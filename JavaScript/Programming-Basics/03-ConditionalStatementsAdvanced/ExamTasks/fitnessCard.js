function solve(input) {

    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0;

    if (gender === 'm') {

        switch (sport) {

            case 'Gym': price = 42; break;
            case 'Boxing': price = 41; break;
            case 'Yoga': price = 45; break;
            case 'Zumba': price = 34; break;
            case 'Dances': price = 51; break;
            case 'Pilates': price = 39; break;
        }

    } else if (gender === 'f') {

        switch (sport) {

            case 'Gym': price = 35; break;
            case 'Boxing': price = 37; break;
            case 'Yoga': price = 42; break;
            case 'Zumba': price = 31; break;
            case 'Dances': price = 53; break;
            case 'Pilates': price = 37; break;
        }
    }

    if (age <= 19) {
        price = price * 0.80;
    }

    let difference = Math.abs(budget - price);

    if (budget > price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`);
    }
}

solve(['50', 'm', '23', 'Gym']);
solve(['20', 'f', '15', 'Yoga']);
solve(['10', 'm', '50', 'Pilates']);