function carFactory(orderedCarObject) {

    let assembledCarObject = {};

    assembledCarObject.model = orderedCarObject.model;

    selectEngine();

    assembledCarObject.carriage = {};
    assembledCarObject.carriage.type = orderedCarObject.carriage;
    assembledCarObject.carriage.color = orderedCarObject.color;

    checkWheels();

    return assembledCarObject;

    function selectEngine() {

        let enginesOnStock = {

            smallEngine: { power: 90, volume: 1800 },
            normalEngine: { power: 120, volume: 2400 },
            monsterEngine: { power: 200, volume: 3500 },
        };

        if (orderedCarObject.power <= 105) {
            assembledCarObject.engine = enginesOnStock.smallEngine;

        } else if (orderedCarObject.power <= 160) {
            assembledCarObject.engine = enginesOnStock.normalEngine;

        } else {
            assembledCarObject.engine = enginesOnStock.monsterEngine;
        }
    }

    function checkWheels() {

        assembledCarObject.wheels = [];

        if (orderedCarObject.wheelsize % 2 == 0) {
            orderedCarObject.wheelsize--;
        }

        for (let i = 0; i < 4; i++) {
            assembledCarObject.wheels.push(orderedCarObject.wheelsize);
        }
    }
}

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));