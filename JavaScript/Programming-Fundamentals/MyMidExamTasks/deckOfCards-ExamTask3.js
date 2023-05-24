function deckOfCards(inputDataArray) {

    let listCardsArray = inputDataArray.shift().split(', ');
    let commandNumber = Number(inputDataArray.shift());

    for (let i = 0; i < commandNumber; i++) {

        let currentCommandArray = inputDataArray[i].split(', ');
        let currentCommand = currentCommandArray[0];

        switch (currentCommand) {

            case 'Add':

                let cardNameAdd = currentCommandArray[1];

                if (!listCardsArray.includes(cardNameAdd)) {
                    listCardsArray.push(cardNameAdd);
                    console.log(`Card successfully added`);

                } else {
                    console.log(`Card is already in the deck`);
                }

                break;

            case 'Remove':

                let cardNameRemove = currentCommandArray[1];

                if (listCardsArray.includes(cardNameRemove)) {
                    let index = listCardsArray.indexOf(cardNameRemove);
                    listCardsArray.splice(index, 1);

                    console.log(`Card successfully removed`);

                } else {
                    console.log(`Card not found`);
                }

                break;

            case 'Remove At':

                let indexRemoveAt = Number(currentCommandArray[1]);

                if (listCardsArray[indexRemoveAt]) {
                    listCardsArray.splice(indexRemoveAt, 1);
                    console.log(`Card successfully removed`);

                } else {
                    console.log(`Index out of range`);
                }

                break;

            case 'Insert':

                let indexInsert = Number(currentCommandArray[1]);
                let cardNameInsert = currentCommandArray[2];

                if (listCardsArray[indexInsert]) {

                    if (listCardsArray.includes(cardNameInsert)) {
                        console.log(`Card is already added`);

                    } else {
                        listCardsArray.splice(indexInsert, 0, cardNameInsert);

                        console.log(`Card successfully added`);
                    }

                } else {
                    console.log(`Index out of range`);
                }

                break;
        }
    }

    console.log(listCardsArray.join(', '));
}

// deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
//     "3",
//     "Add, King of Diamonds",
//     "Insert, 2, Jack of Spades",
//     "Remove, Ace of Diamonds"]);
// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
// "2",
// "Add, Two of Clubs",
// "Remove, Five of Hearts"]);
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"]);
