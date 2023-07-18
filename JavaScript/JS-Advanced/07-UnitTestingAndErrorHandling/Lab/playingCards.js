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

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());