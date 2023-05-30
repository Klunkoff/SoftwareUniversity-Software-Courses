function plantDiscovery(inputArray) {

    let number = inputArray.shift();
    let plantObject = {};

    for (let i = 0; i < number; i++) {
        let [plantName, rarity] = inputArray.shift().split('<->');
        plantObject[plantName] = { rarity: rarity, rating: [] };
    }

    let command = inputArray.shift();

    while (command !== 'Exhibition') {

        let currenCommand = command.split(': ')[0];
        let currentPlant = command.split(': ')[1].split(' - ')[0];

        if (!plantObject.hasOwnProperty(currentPlant)) {
            console.log(`error`);
            command = inputArray.shift();
            continue;
        }

        switch (currenCommand) {

            case 'Rate':

                let currentRating = command.split(': ')[1].split(' - ')[1];
                currentRating = Number(currentRating);
                plantObject[currentPlant].rating.push(currentRating);

                break;

            case 'Update':

                let currentRarity = command.split(': ')[1].split(' - ')[1];
                plantObject[currentPlant].rarity = currentRarity;

                break;

            case 'Reset':

                plantObject[currentPlant].rating = [];

                break;
        }

        command = inputArray.shift();
    }

    console.log(`Plants for the exhibition:`);

    for (let plant in plantObject) {

        let ratingArray = plantObject[plant].rating;
        let currentTotalrating = 0;
        ratingArray.forEach(element => currentTotalrating += element);
        let currentAverageRating = (currentTotalrating / ratingArray.length);

        if (!currentAverageRating) {
            currentAverageRating = 0;
        }

        console.log(`- ${plant}; Rarity: ${plantObject[plant].rarity}; Rating: ${currentAverageRating.toFixed(2)}`);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
// plantDiscovery(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"]);