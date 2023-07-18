const { isSymmetric } = require("./checkForSymmetry");
const { expect } = require('chai');

describe('Checking for symmetry', () => {

    it ('Takes an symmetric array 4 numbers', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it ('Takes an symmetric array with chars', () => {
        expect(isSymmetric(['a','b', 'b', 'a'])).to.be.true;
    });

    it ('Takes an symmetric array 8 numbers', () => {
        expect(isSymmetric([1, 2, 3, 4, 4, 3, 2, 1])).to.be.true;
    });

    it ('Function without argument', () => {
        expect(isSymmetric()).to.be.false;
    });
    
    it ('Have string in the array', () => {
        expect(isSymmetric([1, 'two', 2, 1])).to.be.false;
    });

    it ('Takes an asymmetric array', () => {
        expect(isSymmetric([1, 3, 2, 1])).to.be.false;
    });

    it ('Odd length array', () => {
        expect(isSymmetric([1, 3, 2, 1, 1])).to.be.false;
    });

    it ('Takes a string as argumemt', () => {
        expect(isSymmetric('string')).to.be.false;
    });

    it ('Takes a number as argumemt', () => {
        expect(isSymmetric(10)).to.be.false;
    });

    it ('Takes a number as argumemt', () => {
        expect(isSymmetric([1, '2', 2, 1])).to.be.false;
    });

});