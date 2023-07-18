function deckOfCards(cardsArray) {

    let resultArray = [];

    for (let card of cardsArray) {

        let face;
        let suit;

        try {

            face = card.slice(0, -1);
            suit = card.slice(-1);
            let resultObject = (playingCards(face, suit));
            let currentCard = resultObject.face + resultObject.suit;
            resultArray.push(currentCard);

        } catch (ex) {

            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }

    function playingCards(face, suit) {

        const suitObject = {

            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        const faceObject = {

            '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8',
            '9': '9', '10': '10', 'J': 'J', 'Q': 'Q', 'K': 'K', 'A': 'A',
        }

        if (!faceObject.hasOwnProperty(face) || !suitObject.hasOwnProperty(suit)) {
            throw new Error('Error');
        }

        let cardObject = {

            face: faceObject[face],
            suit: suitObject[suit],

            toString() {
                return `${this.face}${this.suit}`;
            }
        }

        return cardObject;
    }

    console.log(resultArray.join(' '));
}

// deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);