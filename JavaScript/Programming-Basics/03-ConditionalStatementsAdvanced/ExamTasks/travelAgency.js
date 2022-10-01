function solve(input) {

    let city = input[0];
    let package = input[1];
    let VIP = input[2];
    let days = Number(input[3]);

    let price = 0;

    if (city === 'Bansko' || city === `Borovets`) {

        switch (package) {

            case 'withEquipment': price = 100;

                if (VIP === 'yes') {
                    price = price * 0.90;

                } 
                
                break;

            case 'noEquipment': price = 80;

                if (VIP === 'yes') {
                    price = price * 0.95;

                } 
                
                break;
        }

    } else if (city === 'Varna' || city === 'Burgas') {

        switch (package) {

            case 'withBreakfast': price = 130;

                if (VIP === 'yes') {
                    price = price * 0.88;

                } 
                
                break;

            case 'noBreakfast': price = 100;

                if (VIP === 'yes') {
                    price = price * 0.93;

                } 
                
                break;
        }
    }

    if (days > 7) {
        price = price * (days - 1);
    } else {
        price = price * days;
    }

    if (days < 1) {

        console.log(`Days must be positive number!`);

    } else if (city !== 'Bansko' && city !== 'Borovets'
        && city !== 'Varna' && city !== 'Burgas' || package !== 'noEquipment' &&
        package !== 'withEquipment' && package !== 'noBreakfast' && package !== 'withBreakfast') {

        console.log(`Invalid input!`);

    } else {

        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}

solve(['Borovets', 'noEquipment', 'yes', '6']);
solve(['Bansko', 'withEquipment', 'no', '2']);
solve(['Varna', 'withBreakfast', 'yes', '5']);
solve(['Burgas', 'noBreakfast', 'no', '4']);
solve(['Varna', 'withBreakfast', 'no', '0']);
solve(['Gabrovo', 'noBreakfast', 'no', '3']);