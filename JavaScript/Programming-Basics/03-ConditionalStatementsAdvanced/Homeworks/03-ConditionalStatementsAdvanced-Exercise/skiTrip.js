function solve(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;

    switch (typeRoom) {

        case 'room for one person':

            price = nights * 18.00; break;

        case 'apartment':

            price = nights * 25.00;

            if (days < 10) {
                price = price - (price * 0.3);
            } else if (days >= 10 && days <= 15) {
                price = price - (price * 0.35);
            } else {
                price = price - (price * 0.50);
            }

            break;

        case 'president apartment':

            price = nights * 35.00;

            if (days < 10) {
                price = price - (price * 0.1);
            } else if (days >= 10 && days <= 15) {
                price = price - (price * 0.15);
            } else {
                price = price - (price * 0.20);
            }

            break;
    }

    if (rating === 'positive') {
        price = price + (price * 0.25);
    } else {
        price = price - (price * 0.1);
    }

    console.log(price.toFixed(2));
}

solve(['2', 'apartment', 'positive']);