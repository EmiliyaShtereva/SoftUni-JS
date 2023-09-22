function printDeckOfCards(cards) {
    function createCard(face, suit, arr) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        if (faces.includes(face) === false || suit in suits === false) {
            return notValidCard = true;
        }

        let card = {
            face,
            suit,
            toString() {
                let fullCard = this.face + suits[this.suit];
                arr.push(fullCard)
            }
        }

        return card.toString();
    }

    let arr = [];
    let notValidCard = false;
    for (const card of cards) {
        let token = card.split('');
        if (card.length === 3) {
            let face = token[0] + token[1];
            let suit = token[2];
            createCard(face, suit, arr);
            if (notValidCard === true) {
                return console.log(`Invalid card: ${face + suit}`);
            }
        } else {
            let face = token[0];
            let suit = token[1];
            createCard(face, suit, arr);
            if (notValidCard === true) {
                return console.log(`Invalid card: ${face + suit}`);
            }
        }
    }
    console.log(arr.join(' '));
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);