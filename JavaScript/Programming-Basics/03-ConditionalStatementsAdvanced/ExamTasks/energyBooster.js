function solve(input) {

    let fruit = input[0];
    let setSize = input[1];
    let setNumber = Number(input[2]);

    let price = 0;

    if (setSize === 'small') {

        switch (fruit) {

            case 'Watermelon': price = setNumber * 2 * 56; break;
            case 'Mango': price = setNumber * 2 * 36.66; break;
            case 'Pineapple': price = setNumber * 2 * 42.10; break;
            case 'Raspberry': price = setNumber * 2 * 20; break;
        }

    } else if (setSize === 'big') {

        switch (fruit) {

            case 'Watermelon': price = setNumber * 5 * 28.70; break;
            case 'Mango': price = setNumber * 5 * 19.60; break;
            case 'Pineapple': price = setNumber * 5 * 24.80; break;
            case 'Raspberry': price = setNumber * 5 * 15.20; break;
        }
    }

    if (price >= 400 && price <= 1000) {
        price = price * 0.85;
    } else if (price > 1000) {
        price = price / 2;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

solve(['Watermelon', 'big', '4']);
solve(['Pineapple', 'small', '1']);
solve(['Raspberry', 'small', '50']);
solve(['Mango', 'big', '8']);
