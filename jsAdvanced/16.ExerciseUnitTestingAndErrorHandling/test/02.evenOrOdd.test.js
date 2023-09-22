const expect = require('chai').expect;
const isOddOrEven = require('../02.evenOrOdd');

describe('odd or even', function() {
    it ('with non string it should return undefined', function() {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it ('should return even with an even string', function() {
        expect(isOddOrEven('abcd')).to.equal('even');
    });

    it ('should return odd with an odd string', function() {
        expect(isOddOrEven('abc')).to.equal('odd');
    });
})