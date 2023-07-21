const { lookupChar } = require("./charLookup");
const { expect } = require('chai');

describe ('Looks for char at exact index', () => {

    it('should return M', () => {
        expect(lookupChar('Milena', 0)).to.equal('M');
    });

    it('should return a', () => {
        expect(lookupChar('Milena', 5)).to.equal('a');
    });

    it('should return undefinded if the first argument is a number', () => {
        expect(lookupChar(20, 4)).to.be.undefined;
    });

    it('should return undefinded if the first argument is a array', () => {
        expect(lookupChar([20], 4)).to.be.undefined;
    });

    it('should return undefinded if the second argument is not a number', () => {
        expect(lookupChar('Milena', 'Dimitar')).to.be.undefined;
    });

    it('tests with invalid index', () => {
        expect(lookupChar('Milena', 10)).to.equal('Incorrect index');
    });

    it('tests with negative index', () => {
        expect(lookupChar('Milena', -1)).to.equal('Incorrect index');
    });

    it('tests with float number index', () => {
        expect(lookupChar('Milena', 3.14)).to.undefined;
    });

    it('tests with index = string.length', () => {
        expect(lookupChar('Milena', 6)).to.equal('Incorrect index');
    });

    it('tests without arguments', () => {
        expect(lookupChar()).to.undefined;
    });

    it('tests with one argument', () => {
        expect(lookupChar('Milena')).to.undefined;
    });

    it('tests with string num', () => {
        expect(lookupChar('Milena', '4')).to.undefined;
    });
});