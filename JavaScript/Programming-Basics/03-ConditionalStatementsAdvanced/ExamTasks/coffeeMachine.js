function solve(input) {

    let drink = input[0];
    let shugar = input[1];
    let number = Number(input[2]);

    let price = 0;

    switch (drink) {

        case 'Espresso':

            if (shugar === 'Without') {
                price = number * 0.90;
            } else if (shugar === 'Normal') {
                price = number * 1.00;
            } else {
                price = number * 1.20;
            }

            break;

        case 'Cappuccino':

            if (shugar === 'Without') {
                price = number * 1.00;
            } else if (shugar === 'Normal') {
                price = number * 1.20;
            } else {
                price = number * 1.60;
            }

            break;

        case 'Tea':

            if (shugar === 'Without') {
                price = number * 0.50;
            } else if (shugar === 'Normal') {
                price = number * 0.60;
            } else {
                price = number * 0.70;
            }

            break;
    }

    if (shugar === 'Without') {
        price = price * 0.65;
    }

    if (drink === 'Espresso' && number >= 5) {
        price = price * 0.75;
    }

    if (price > 15) {
        price = price * 0.8;
    }

    console.log(`You bought ${number} cups of ${drink} for ${price.toFixed(2)} lv.`);
}

solve(['Espresso', 'Without', '10']);
solve(['Cappuccino', 'Normal', '13']);
solve(['Tea', 'Extra', '3']);