const { numberOperations } = require("./numberOperations");
const { expect } = require("chai");

describe('numberOperation object testing', () => {

    it('test powNumber method', () => {

        expect(numberOperations.powNumber(2)).equal(4);
        expect(numberOperations.powNumber(4)).equal(16);
        expect(numberOperations.powNumber(2.5)).equal(6.25);
    });

    it('test numberChecker method with valid params', () => {

        expect(numberOperations.numberChecker(50)).equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(99)).equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(0)).equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(-10)).equal('The number is lower than 100!');

        expect(numberOperations.numberChecker(100)).equal('The number is greater or equal to 100!');
        expect(numberOperations.numberChecker(150)).equal('The number is greater or equal to 100!');
    });

    it('test numberChecker method with invalid params', () => {

        expect(() => numberOperations.numberChecker('test')).to.throw('The input is not a number!');
        expect(() => numberOperations.numberChecker(['test'])).to.throw('The input is not a number!');
        expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
    });

    it('test sumArrays method', () => {

        expect(numberOperations.sumArrays([2, 4, 6], [6, 4, 2])).deep.equal([8, 8, 8]);
        expect(numberOperations.sumArrays([2, 4, 6], [6, 4, 2, 5])).deep.equal([8, 8, 8, 5]);
        expect(numberOperations.sumArrays([2, 4, 6, 10], [6, 4, 2])).deep.equal([8, 8, 8, 10]);
        expect(numberOperations.sumArrays([2, 4, 6, 10], [6, 4])).deep.equal([8, 8, 6, 10]);
    });
});

