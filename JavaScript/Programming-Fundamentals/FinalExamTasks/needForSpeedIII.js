function needForSpeedIII(inputData) {

    let carNumber = Number(inputData.shift());
    let carObject = {};
    let carTankCapacity = 75;

    for (let i = 0; i < carNumber; i++) {

        let currentCarArray = inputData.shift().split('|');
        let [currentCar, mileage, fuel] = currentCarArray;
        mileage = Number(mileage);
        fuel = Number(fuel);

        carObject[currentCar] = { mileage: mileage, fuel: fuel };
    }

    let command = inputData.shift();

    while (command !== 'Stop') {

        let currentCommandArray = command.split(' : ');
        let currentCommand = currentCommandArray[0];
        let currentCar = currentCommandArray[1];

        switch (currentCommand) {

            case 'Drive':

                let driveDistance = Number(currentCommandArray[2]);
                let driveFuel = Number(currentCommandArray[3]);

                if (carObject[currentCar].fuel < driveFuel) {
                    console.log(`Not enough fuel to make that ride`);

                } else {
                    carObject[currentCar].fuel -= driveFuel;
                    carObject[currentCar].mileage += driveDistance;
                    console.log(`${currentCar} driven for ${driveDistance} kilometers. ${driveFuel} liters of fuel consumed.`);

                    if (carObject[currentCar].mileage >= 100000) {
                        delete carObject[currentCar];
                        console.log(`Time to sell the ${currentCar}!`);
                    }
                }

                break;

            case 'Refuel':

                let refuelFuel = Number(currentCommandArray[2]);
                let currentCarFuel = carObject[currentCar].fuel;
                let totalFuel = currentCarFuel + refuelFuel;

                if (totalFuel > carTankCapacity) {
                    carObject[currentCar].fuel = 75;
                    refuelFuel = carTankCapacity - currentCarFuel;

                } else {
                    carObject[currentCar].fuel += refuelFuel;
                }

                console.log(`${currentCar} refueled with ${refuelFuel} liters`);

                break;

            case 'Revert':

                let revertKilometers = Number(currentCommandArray[2]);
                carObject[currentCar].mileage -= revertKilometers;

                if (carObject[currentCar].mileage < 10000) {
                    carObject[currentCar].mileage = 10000;

                } else {
                    console.log(`${currentCar} mileage decreased by ${revertKilometers} kilometers`);
                }

                break;
        }

        command = inputData.shift();
    }

    let carKeys = Object.keys(carObject);

    for (let key of carKeys) {
        console.log(`${key} -> Mileage: ${carObject[key].mileage} kms, Fuel in the tank: ${carObject[key].fuel} lt.`);
    }
}

// needForSpeedIII([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop']);
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);