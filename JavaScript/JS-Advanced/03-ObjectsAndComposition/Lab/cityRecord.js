function cityRecord(name, population, treasury) {

    let cityObject = {};

    cityObject.name = name;
    cityObject.population = population;
    cityObject.treasury = treasury;

     return cityObject;
}

console.log(cityRecord('Tortuga',
    7000,
    15000));
console.log(cityRecord('Santo Domingo',
    12000,
    23500));