const { testNumbers } = require("./testNumbers");
const { expect } = require('chai');

describe('test testNumbers', () => {

    it('test sumNumber method with valid params', () => {

        expect(testNumbers.sumNumbers(5, 5)).equal('10.00');
        expect(testNumbers.sumNumbers(5, -5)).equal('0.00');
        expect(testNumbers.sumNumbers(-5, -5)).equal('-10.00');
        expect(testNumbers.sumNumbers(-5, 5)).equal('0.00');
    });

    it('test sumNumber method with invalid params', () => {

        expect(testNumbers.sumNumbers('5', 5)).equal(undefined);
        expect(testNumbers.sumNumbers('5', '5')).equal(undefined);
        expect(testNumbers.sumNumbers(5, '5')).equal(undefined);
        expect(testNumbers.sumNumbers(5)).equal(undefined);
        expect(testNumbers.sumNumbers()).equal(undefined);
    });

    it('test numberChecker method with correct inputs', () => {

        expect(testNumbers.numberChecker(5)).equal('The number is odd!');
        expect(testNumbers.numberChecker(4)).equal('The number is even!');
    });

    it('test numberChecker method with wrong inputs', () => {

        expect(() => testNumbers.numberChecker('proba')).to.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker(['proba'])).to.throw('The input is not a number!');
    });

    it('test averageSumArray method', () => {

        expect(testNumbers.averageSumArray([20, 10])).equal(15);
        expect(testNumbers.averageSumArray([20, -10])).equal(5);
        expect(testNumbers.averageSumArray([20, 20, 20, 20, 20])).equal(20);
        expect(testNumbers.averageSumArray([-20, -20, -20])).equal(-20);
        expect(testNumbers.averageSumArray([20.50, 20.50])).equal(20.5);
    });
});