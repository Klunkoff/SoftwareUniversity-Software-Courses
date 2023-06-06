function cookingByNumbers(...parameters) {

    let number = Number(parameters.shift());

    let commandObject = {

        'chop': (number) => number / 2,
        'dice': (number) => Math.sqrt(number),
        'spice': (number) => number + 1,
        'bake': (number) => number * 3,
        'fillet': (number) => number * 0.8,
    }

    while (parameters.length !== 0) {

        let currentCommand = parameters.shift();
        let result = (commandObject[currentCommand]);
        number = result(number);

        console.log(number);
    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');