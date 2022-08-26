function solve(input) {

    let degrees = Number(input[0]);

    if (degrees >= 5 && degrees <= 11.90) {

        console.log(`Cold`);

    } else if (degrees >= 12 && degrees <= 14.90) {

        console.log(`Cool`);

    } else if (degrees >= 15 && degrees <= 20.00) {

        console.log(`Mild`);

    } else if (degrees >= 20.1 && degrees <= 25.90) {

        console.log(`Warm`);

    } else if (degrees >= 26 && degrees <= 35.00) {

        console.log(`Hot`);

    } else {

        console.log(`unknown`);
    }
}

// solve(['16.5']);
solve(['22.4']);