function solve(input) {

    let product = input[0];
    let city = input[1];
    let number = Number(input[2]);

    let price = 0;

    if (city === 'Sofia') {

        switch (product) {

            case 'coffee': price = number * 0.50; break;
            case 'water': price = number * 0.80; break;
            case 'beer': price = number * 1.20; break;
            case 'sweets': price = number * 1.45; break;
            case 'peanuts': price = number * 1.60; break;
        }

    } else if (city === 'Plovdiv') {

        switch (product) {

            case 'coffee': price = number * 0.40; break;
            case 'water': price = number * 0.70; break;
            case 'beer': price = number * 1.15; break;
            case 'sweets': price = number * 1.30; break;
            case 'peanuts': price = number * 1.50; break;
        }

    } else if (city === 'Varna') {

        switch (product) {

            case 'coffee': price = number * 0.45; break;
            case 'water': price = number * 0.70; break;
            case 'beer': price = number * 1.10; break;
            case 'sweets': price = number * 1.35; break;
            case 'peanuts': price = number * 1.55; break;
        }
    }

    console.log(price);
}

solve(['beer', 'Sofia', '10']);