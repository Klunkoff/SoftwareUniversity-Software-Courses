function theHuntingGames(inputArray) {

    let days = inputArray.shift();
    let players = inputArray.shift();
    let energy = inputArray.shift();
    let waterPerDay = inputArray.shift();
    let foodPerDay = inputArray.shift();

    let water = players * days * waterPerDay;
    let food = players * days * foodPerDay;

    inputArray = inputArray.map(Number);

    for (let i = 0; i < inputArray.length; i++) {

        energy -= inputArray[i];

        if (energy <= 0) {
            break;
        }

        if ((i + 1) % 2 === 0) {
            energy *= 1.05;
            water -= water * 0.3;
        }

        if ((i + 1) % 3 === 0) {
            food -= food / players;
            energy *= 1.1;
        }
    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);

    } else {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    }
}

// theHuntingGames(["10","7","5035.5","11.3","7.2",
// "942.3",
// "500.57",
// "520.68",
// "540.87",
// "505.99",
// "630.3",
// "784.20",
// "321.21",
// "456.8",
// "330"])
theHuntingGames(["12", "6", "4430", "9.8", "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);