function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    if (faces.includes(face) === false) {
        throw new TypeError('Invalid face');
    } else if (suit in suits === false) {
        throw new TypeError('Invalid suit');
    }

    let card = {
        face,
        suit,
        toString() {
            return this.face + suits[this.suit];
        }
    }

    return card;
}

// playingCards('A', 'S');
// playingCards('10', 'H');
playingCards('1', 'C')