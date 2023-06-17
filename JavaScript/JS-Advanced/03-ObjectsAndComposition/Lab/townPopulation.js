function townPopulation(townsArray) {

    let townsObject = {};

    for (let town of townsArray) {

        let [townName, population] = town.split(' <-> ');
        population = Number(population);

        if (townsObject.hasOwnProperty(townName)) {
            population += townsObject[townName];
        }

        townsObject[townName] = population;
    }

    for (let key in townsObject) {
        console.log(`${key} : ${townsObject[key]}`);
    }
}

// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);