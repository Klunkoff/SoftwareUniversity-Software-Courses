function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let classCar = "";
    let typeCar = "";

    if (budget <= 100) {

        classCar = 'Economy class';

        switch (season) {

            case 'Summer': typeCar = 'Cabrio'; budget *= 0.35; break;
            case 'Winter': typeCar = 'Jeep'; budget *= 0.65; break;
        }

    } else if (budget <= 500) {

        classCar = 'Compact class';

        switch (season) {

            case 'Summer': typeCar = 'Cabrio'; budget *= 0.45; break;
            case 'Winter': typeCar = 'Jeep'; budget *= 0.80; break;
        }

    } else {

        classCar = 'Luxury class';
        typeCar = 'Jeep';
        budget *= 0.90;
    }

    console.log(classCar);
    console.log(`${typeCar} - ${budget.toFixed(2)}`);
}

// solve(['450', 'Summer']);
// solve(['450', 'Winter']);
// solve(['1010', 'Summer']);
solve(['99.99', 'Summer']);