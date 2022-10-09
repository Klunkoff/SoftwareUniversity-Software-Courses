function solve(input) {

    let numberJoinery = Number(input[0]);
    let joineryType = input[1];
    let delivery = input[2];

    let price = 0;

    if (numberJoinery > 10) {

        switch (joineryType) {

            case '90X130':

                price = numberJoinery * 110;

                if (numberJoinery > 30 && numberJoinery < 60) {
                    price = price * 0.95;
                } else if (numberJoinery > 60) {
                    price = price * 0.92;
                }

                break;

            case '100X150':

                price = numberJoinery * 140;

                if (numberJoinery > 40 && numberJoinery < 80) {
                    price = price * 0.94;
                } else if (numberJoinery > 80) {
                    price = price * 0.90;
                }

                break;

            case '130X180':

                price = numberJoinery * 190;

                if (numberJoinery > 20 && numberJoinery < 50) {
                    price = price * 0.93;
                } else if (numberJoinery > 50) {
                    price = price * 0.88;
                }

                break;

            case '200X300':

                price = numberJoinery * 250;

                if (numberJoinery > 25 && numberJoinery < 50) {
                    price = price * 0.91;
                } else if (numberJoinery > 50) {
                    price = price * 0.86;
                }

                break;
        }
    }

    if (delivery === 'With delivery') {
        price = price + 60;
    }

    if (numberJoinery > 99) {
        price = price * 0.96;
    }

    if (numberJoinery < 10) {
        console.log(`Invalid order`);

    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}

solve(['40', '90X130', 'Without delivery']);
solve(['105', '100X150', 'With delivery']);
solve(['2', '130X180', 'With delivery']);