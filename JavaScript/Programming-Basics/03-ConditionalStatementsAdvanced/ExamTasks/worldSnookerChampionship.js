function solve(input) {

    let finalType = input[0];
    let ticketType = input[1];
    let ticketNumber = Number(input[2]);
    let trophyPic = input[3];

    let price = 0;

    if (ticketType === 'Standard') {

        switch (finalType) {

            case 'Quarter final': price = ticketNumber * 55.50; break;
            case 'Semi final': price = ticketNumber * 75.88; break;
            case 'Final': price = ticketNumber * 110.10; break;
        }

    } else if (ticketType === 'Premium') {

        switch (finalType) {

            case 'Quarter final': price = ticketNumber * 105.20; break;
            case 'Semi final': price = ticketNumber * 125.22; break;
            case 'Final': price = ticketNumber * 160.66; break;
        }

    } else if (ticketType === 'VIP') {

        switch (finalType) {

            case 'Quarter final': price = ticketNumber * 118.90; break;
            case 'Semi final': price = ticketNumber * 300.40; break;
            case 'Final': price = ticketNumber * 400.00; break;
        }
    }

    let trophyPrice = ticketNumber * 40;

    if (price > 4000) {
        price = price * 0.75;

    } else if (price > 2500 && price <= 4000 && trophyPic === 'N') {
        price = price * 0.90;

    } else if (price > 2500 && price <= 4000 && trophyPic === 'Y') {
        price = price * 0.90 + trophyPrice;

    } else if (price <= 2500 && trophyPic === 'N') {
        price = price;

    } else if (price <= 2500 && trophyPic === 'Y') {
        price = price + trophyPrice;
    }

    console.log(price.toFixed(2));
}

solve(['Final', 'Premium', '25', 'Y']);
solve(['Semi final', 'VIP', '9', 'Y']);
solve(['Quarter final', 'Standard', '11', 'N']);
