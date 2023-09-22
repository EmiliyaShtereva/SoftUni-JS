let expect = require('chai').expect;
let lookupChar = require('../03.charLookup');

describe('lookup character funcion', function() {
    it ('should return undefined with a non string', function() {
        expect(lookupChar(1, 2)).to.equal(undefined);
    });

    it ('should return undefined with a floating point number', function() {
        expect(lookupChar('abcdsgd', 2.5)).to.equal(undefined);
    });

    it ('should return Incorrect index with a number outside of the bounds of the string', function() {
        expect(lookupChar('abcdsgd', 20)).to.equal("Incorrect index");
    });

    it ('should return Incorrect index with a negative number ', function() {
        expect(lookupChar('abcdsgd', -3)).to.equal("Incorrect index");
    });

    it ('should return a correct index', function() {
        expect(lookupChar('abcdsgd', 2)).to.equal("c");
    });
})