const { mathEnforcer } = require("./mathEnforcer");
const { expect } = require('chai');

describe('Should do some math', () => {

    let calculator;

    beforeEach(() => {
        calculator = mathEnforcer;
    });


    it('should add 5 to the argument number result = 15', () => {
        let value = calculator.addFive(10);
        expect(value).to.be.equal(15);
    });

    it('should add -5 to the argument number result = 0', () => {
        let value = calculator.addFive(-5);
        expect(value).to.be.equal(0);
    });

    it('should return undefined with string', () => {
        let value = calculator.addFive('10');
        expect(value).to.be.undefined;
    });

    it('should add -1.2 to the argument number result = -3.8', () => {
        let value = calculator.addFive(-1.2);
        expect(value).to.be.equal(3.8);
    });


    it('should subtract 10 from the argument number result = 0', () => {
        let value = calculator.subtractTen(10);
        expect(value).to.be.equal(0);
    });

    it('should subtract -5 to the argument number result = -15', () => {
        let value = calculator.subtractTen(-5);
        expect(value).to.be.equal(-15);
    });

    it('should return undefined with string', () => {
        let value = calculator.subtractTen('10');
        expect(value).to.be.undefined;
    });

    it('should subtract -2.5 from the argument number result = -12.5', () => {
        let value = calculator.subtractTen(-2.5);
        expect(value).to.be.equal(-12.5);
    });


    it('should sum 10 and 20 result = 30', () => {
        let value = calculator.sum(10, 20);
        expect(value).to.be.equal(30);
    });

    it('should sum -5 and -10 to the argument number result = -15', () => {
        let value = calculator.sum(-5, -10);
        expect(value).to.be.equal(-15);
    });

    it('should return undefined with first argument as string', () => {
        let value = calculator.sum('10', 10);
        expect(value).to.be.undefined;
    });

    it('should return undefined with second argument as string', () => {
        let value = calculator.sum(10, '10');
        expect(value).to.be.undefined;
    });

    it('should return undefined with two arguments as string', () => {
        let value = calculator.sum('10', '10');
        expect(value).to.be.undefined;
    });

    it('should sum float numbers', () => {
        let value = calculator.sum(25.75, 25.25);
        expect(value).to.be.equal(51);
    });

    it('should sum negative float numbers', () => {
        let value = calculator.sum(-25.75, -25.25);
        expect(value).to.be.equal(-51);
    });
});
