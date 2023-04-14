function cardGame(arrayOfPlayers) {
 
    let playerObject = {};
 
    for (let element of arrayOfPlayers) {
 
        let [currentName, playerCards] = element.split(': ');
        playerCards = playerCards.split(', ');
 
        for (let i = 0; i < playerCards.length; i++) {
 
            let currentCard = playerCards[i];
 
            for (let j = i + 1; j < playerCards.length; j++) {
 
                let checkCard = playerCards[j];
 
                if (currentCard === checkCard) {
                    let cardIndex = playerCards.indexOf(checkCard);
                    playerCards.splice(cardIndex, 1);
                }
            }
 
            if (playerCards.length == 2 && playerCards[0] === playerCards[1]) {
                playerCards.splice(0, 1);
            }
        }
 
        if (!playerObject.hasOwnProperty(currentName)) {
            playerObject[currentName] = playerCards;
 
        } else {
 
            let objectPlayerCards = playerObject[currentName];
 
            for (let i = 0; i < objectPlayerCards.length; i++) {
 
                let currentCard = objectPlayerCards[i];
 
                for (let j = 0; j < playerCards.length; j++) {
 
                    let checkCard = playerCards[j];
 
                    if (currentCard === checkCard) {
                        let cardIndex = playerCards.indexOf(checkCard);
                        playerCards.splice(cardIndex, 1);
                    }
                }
            }
 
            for (let card of playerCards) {
 
                objectPlayerCards.push(card);
            }
 
            playerObject[currentName] = objectPlayerCards;
        }
    }
 
    for (let player in playerObject) {
 
        let playerCardSum = 0;
        let playerCardsArray = playerObject[player];
 
        for (let card of playerCardsArray) {
 
            let cardPower = undefined;
            let cardType = undefined;
 
            if (card.length < 3) {
                [cardPower, cardType] = card.split('');
 
            } else {
                cardPower = card.split('').splice(0, 2).join('');
                cardType = card[2];
            }
 
            switch (cardPower) {
 
                case 'J': cardPower = 11; break;
                case 'Q': cardPower = 12; break;
                case 'K': cardPower = 13; break;
                case 'A': cardPower = 14; break;
 
                default: cardPower = Number(cardPower); break;
            }
 
            switch (cardType) {
 
                case 'S': playerCardSum += (cardPower * 4); break;
                case 'H': playerCardSum += (cardPower * 3); break;
                case 'D': playerCardSum += (cardPower * 2); break;
                case 'C': playerCardSum += (cardPower * 1); break;
            }
        }
 
        playerObject[player] = playerCardSum;
    }
 
    for (let name in playerObject) {
        console.log(`${name}: ${playerObject[name]}`);
    }
}
 
// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);
cardGame([
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