const expect = require('chai').expect;
const bookSelection = require('./bookSelection');

describe('nookSelection tests', function () {
    describe('isGenreSuitable', function () {
        it('with thriller or horror genre, should return correct value', function () {
            let genre1 = 'Thriller';
            let genre2 = 'Horror';
            let age1 = 12;
            let age2 = 13;

            let result1 = bookSelection.isGenreSuitable(genre1, age1);
            let result2 = bookSelection.isGenreSuitable(genre2, age1);
            let result3 = bookSelection.isGenreSuitable(genre1, age2);
            let result4 = bookSelection.isGenreSuitable(genre2, age2);

            expect(result1).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`);
            expect(result2).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`);
            expect(result3).to.equal(`Those books are suitable`);
            expect(result4).to.equal(`Those books are suitable`);
        });

        it('with non-thriller or non-horror genre, should say the books are suitable', function () {
            let genre1 = 'Something';
            let genre2 = 'some genre';
            let age1 = 12;
            let age2 = 13;

            let result1 = bookSelection.isGenreSuitable(genre1, age1);
            let result2 = bookSelection.isGenreSuitable(genre2, age1);
            let result3 = bookSelection.isGenreSuitable(genre1, age2);
            let result4 = bookSelection.isGenreSuitable(genre2, age2);

            expect(result1).to.equal(`Those books are suitable`);
            expect(result2).to.equal(`Those books are suitable`);
            expect(result3).to.equal(`Those books are suitable`);
            expect(result4).to.equal(`Those books are suitable`);
        });
    })

    describe('isItAffordable', function() {
        it ('with non-number price and budget, should throw correct Error', function() {
            let price = '30';
            let budget = '20';

            let result1 = () => bookSelection.isItAffordable(price, 30);
            let result2 = () => bookSelection.isItAffordable(20, budget);

            expect(result1).to.throw(Error, 'Invalid input');
            expect(result2).to.throw(Error, 'Invalid input');
        });

        it ('with more budget than price, should should return correct result', function() {
            let price = 20;
            let budget = 30;
            let price2 = 22.3;
            let budget2 = 33.3;

            let result1 = bookSelection.isItAffordable(price, budget);
            let result2 = bookSelection.isItAffordable(price2, budget2);

            expect(result1).to.equal(`Book bought. You have ${budget - price}$ left`);
            expect(result2).to.equal(`Book bought. You have ${budget2 - price2}$ left`);
        });

        it ('with less budget than price, should should return correct result', function() {
            let price = 31;
            let budget = 30;
            let price2 = 32.3;
            let budget2 = 23.3;

            let result1 = bookSelection.isItAffordable(price, budget);
            let result2 = bookSelection.isItAffordable(price2, budget2);

            expect(result1).to.equal(`You don't have enough money`);
            expect(result2).to.equal(`You don't have enough money`);
        })
    })

    describe('suitableTitles', function () {
        it('with non-arra books or non-string wantedGenre, should throw correct error', function() {
            let arr = 'test';
            let arrCorrect = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: "some shit", genre: "Horror"}];
            let genre = 23;

            let result1 = () => bookSelection.suitableTitles(arr, 'test');
            let result2 = () => bookSelection.suitableTitles(arrCorrect, genre);

            expect(result1).to.throw(Error, 'Invalid input');
            expect(result2).to.throw(Error, 'Invalid input');
        })

        it('with correct array and genre, should return correct result', function() {
            let arrCorrect = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: "some shit", genre: "Thrill"}, {title: "another shit", genre: "something"}];
            let genre = 'Thril';
            let expectedResult = arrCorrect.filter(x => x.genre === genre).map(x => x.title);

            let result1 = bookSelection.suitableTitles(arrCorrect, genre);
            let result2 = bookSelection.suitableTitles([], genre);

            expect(result1).to.deep.equal(expectedResult);
            expect(result2).to.deep.equal([]);
        })
    })
})