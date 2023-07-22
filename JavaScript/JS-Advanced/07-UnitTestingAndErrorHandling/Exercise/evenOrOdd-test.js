const { isOddOrEven } = require("./evenOrOdd");
const { expect } = require('chai'); 

describe('Even or odd string', () => {

    it('should return even', () => {
        expect(isOddOrEven('Milena')).to.equal('even');
    });

    it('should return odd', () => {
        expect(isOddOrEven('Dimitar')).to.equal('odd');
    });

    it('should return undefined with number', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });
});