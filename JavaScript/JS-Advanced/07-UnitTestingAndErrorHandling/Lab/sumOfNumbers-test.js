const { sum } = require("./sumOfNumbers");
const { expect } = require('chai');


describe('Check sumator', () => {

    it('Should sum all digits in the array', () => {
        expect(sum([1, 5, 10, 4])).to.equal(20);
    });

    it ('Should return NaN', () => {
        expect(sum('dve', 'tri')).NaN;
    });

    it ('Empty array - should return 0', () => {
        expect(sum([])).to.equal(0);
    });

});