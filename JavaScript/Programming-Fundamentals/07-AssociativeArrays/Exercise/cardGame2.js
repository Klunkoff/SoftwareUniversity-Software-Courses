function cardGame2(arrayOfPlayers) {

    let playerObject = {};

    for (let element of arrayOfPlayers) {

        let [currentName, playerCards] = element.split(': ');
        playerCards = playerCards.split(', ');

        if (!playerObject.hasOwnProperty(currentName)) {
            playerObject[currentName] = new Set();
        }

        for (let card of playerCards) {
            playerObject[currentName].add(card);
        }
    }

    for (let player in playerObject) {
        let playerSum = calculatePoints(player);

        console.log(`${player}: ${playerSum}`);
    }

    function calculatePoints(playerName) {

        let powerCardInfo = {

            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        }

        let typeCardInfo = {

            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1,
        }

        let cardArray = Array.from(playerObject[playerName]);
        let playerSum = 0;

        for (card of cardArray) {

            let cardArray = card.split('');
            let cardType = cardArray.pop();
            let cardPower = cardArray.join('');

            playerSum += typeCardInfo[cardType] * powerCardInfo[cardPower];
        }

        return playerSum;
    }
}

// cardGame2([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);
cardGame2([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);