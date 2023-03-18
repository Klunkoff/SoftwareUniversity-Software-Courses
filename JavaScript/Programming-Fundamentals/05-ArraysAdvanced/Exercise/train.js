function train(arrayOfStrings) {

    let arrayOfWagons = arrayOfStrings
        .shift()
        .split(' ')
        .map(Number);

    let maxWagonCapacity = Number(arrayOfStrings.shift());

    for (let element of arrayOfStrings) {

        let [number, command] = element.split(' ').reverse();
        number = Number(number);

        if (command == 'Add') {
            arrayOfWagons.push(number);

        } else {

            for (let i = 0; i < arrayOfWagons.length; i++) {

                let passengers = arrayOfWagons[i];
                let newPassengers = passengers + number;

                if (newPassengers <= maxWagonCapacity) {
                    arrayOfWagons.splice(i, 1, newPassengers);

                    break;
                }
            }
        }
    }

    console.log(arrayOfWagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
// train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);