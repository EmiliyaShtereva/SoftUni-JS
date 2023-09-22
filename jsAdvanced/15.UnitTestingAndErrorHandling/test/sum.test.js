const chai = require('chai');
const sum = require('../04.sumOfNums');

describe('sum function', function() {
    it ('should sum integers correctly', function () {
        let arr = [1,2,3];
        let result = sum(arr);
        chai.expect(result).to.equal(6);
    })

    it ('should sum floating point numbers correctly', function () {
        let arr = [1.1,2.2];
        let result = sum(arr);
        chai.expect(result).to.be.approximately(3.3, 0.001);
    })

    it ('should cast strings to Number before summing', function () {
        let arr = ['10','23'];
        let result = sum(arr);
        chai.expect(result).to.be.equal(33);
    })

    it ('should cast strings to Number before summing', function () {
        let arr = ['tw','23'];
        let result = sum(arr);
        chai.expect(result).to.be.NaN;
    })
})
