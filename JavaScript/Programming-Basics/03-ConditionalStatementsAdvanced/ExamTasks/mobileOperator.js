function solve(input) {

    let contractYears = input[0];
    let contactType = input[1];
    let internet = input[2];
    let monthsNumber = Number(input[3]);

    let price = 0;

    if (contractYears === 'one') {

        switch (contactType) {

            case 'Small': price = 9.98; break;
            case 'Middle': price = 18.99; break;
            case 'Large': price = 25.98; break;
            case 'ExtraLarge': price = 35.99; break;
        }

    } else if (contractYears === 'two') {

        switch (contactType) {

            case 'Small': price = 8.58; break;
            case 'Middle': price = 17.09; break;
            case 'Large': price = 23.59; break;
            case 'ExtraLarge': price = 31.79; break;
        }
    }

    if (internet === 'yes') {

        if (price <= 10) {
            price = price + 5.50;

        } else if (price > 10 && price <= 30) {
            price = price + 4.35;

        } else if (price > 30)
            price = price + 3.85;

    } else {

        price = price;
    }

    let totalPrice = price * monthsNumber;

    if (contractYears === 'two') {

        totalPrice = totalPrice * 0.9625;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

solve(['one', 'Small', 'yes', '10']);
solve(['two', 'Large', 'no', '10']);
solve(['two', 'ExtraLarge', 'yes', '20']);
solve(['two', 'Small', 'yes', '20']);

