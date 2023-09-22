let expect = require('chai').expect;
let mathEnforcer = require('../04.mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it ('should return undefined the passed parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive('num')).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });
        it ('should return input plus five if the parameter is a number', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-4)).to.equal(1);
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
        })
    });
    describe('subtractTen', () => {
        it ('should return undefined the passed parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('num')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });
        it ('should return input minus ten if the parameter is a number', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01);
        })
    });
    describe('sum', () => {
        it ('should return undefined if any of the passed parameters is not a number', () => {
            expect(mathEnforcer.sum('1', '2')).to.equal(undefined);
            expect(mathEnforcer.sum('1', 2)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
        });
        it ('should return the sum of the parameters if both are numbers', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
            expect(mathEnforcer.sum(5.5, 6)).to.be.closeTo(11.5, 0.01);
            expect(mathEnforcer.sum(5, 6.5)).to.be.closeTo(11.5, 0.01);
        })
    });
})