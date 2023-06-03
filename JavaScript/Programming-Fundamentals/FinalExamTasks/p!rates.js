function pirates(inputArray) {
 
    let command = inputArray.shift();
    let citiesObject = {};
 
    while (command !== 'Sail') {
 
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);
 
        if (!citiesObject.hasOwnProperty(city)) {
            citiesObject[city] = { population: population, gold: gold };
 
        } else {
            citiesObject[city].population += population;
            citiesObject[city].gold += gold;
        }
 
        command = inputArray.shift();
    }
 
    while (inputArray[0] !== 'End') {
 
        let currentCommandArray = inputArray.shift().split('=>');
        let currentCommand = currentCommandArray[0];
        let currentCity = currentCommandArray[1];
        let firstParameter = Number(currentCommandArray[2]);
        let secondParameter = Number(currentCommandArray[3]);
 
        if (currentCommand == 'Plunder') {
            plunder(currentCity, firstParameter, secondParameter);
 
        } else if (currentCommand == 'Prosper') {
            prosper(currentCity, firstParameter);
        }
    }
 
    function plunder(city, population, gold) {
 
        citiesObject[city].population -= population;
        citiesObject[city].gold -= gold;
 
        console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
 
        if (citiesObject[city].population == 0 || citiesObject[city].gold == 0) {
            delete citiesObject[city];
            console.log(`${city} has been wiped off the map!`);
        }
    }
 
    function prosper(city, gold) {
 
        if (gold < 0) {
            console.log(`Gold added cannot be a negative number!`);
 
        } else {
            citiesObject[city].gold += gold;
 
            console.log(`${gold} gold added to the city treasury. ${city} now has ${citiesObject[city].gold} gold.`);
        }
    }
 
    let citiesKeysArray = Object.keys(citiesObject);
 
    if (citiesKeysArray == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
 
    } else {
        console.log(`Ahoy, Captain! There are ${citiesKeysArray.length} wealthy settlements to go to:`);
 
        for (let key of citiesKeysArray) {
            console.log(`${key} -> Population: ${citiesObject[key].population} citizens, Gold: ${citiesObject[key].gold} kg`);
        }
    }
}
 
// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]);
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);
