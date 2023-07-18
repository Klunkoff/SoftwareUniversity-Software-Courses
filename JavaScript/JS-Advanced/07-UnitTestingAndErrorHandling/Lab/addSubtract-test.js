const { createCalculator } = require("./addSubtract");
const { expect } = require('chai');


describe('Should calculate', () => {

    let calculator;

    beforeEach( () => {

        calculator = createCalculator();
        console.log(`New Test`);
    });


    it('should return 0', () => {

        let value = calculator.get();
        expect(value).to.equal(0);
    });
   
    it('should add 5 to the value', () => {

        calculator.add(5);
        let value = calculator.get();
        expect(value).to.equal(5);
    });

    it('should add two times 5 to the value', () => {

        calculator.add(5);
        calculator.add(5);
        let value = calculator.get();
        expect(value).to.equal(10);
    });

    it('should subtract 5 from the value', () => {

        calculator.subtract(5);
        let value = calculator.get();
        expect(value).to.equal(-5);
    });

    it('should add 10 then subtract 5 from the value', () => {

        calculator.add(10);
        calculator.subtract(5);
        let value = calculator.get();
        expect(value).to.equal(5);
    });

    it('should add parsed string 10 then subtract parsed string 5 from the value', () => {

        calculator.add('10');
        calculator.subtract('5');
        let value = calculator.get();
        expect(value).to.equal(5);
    });

    it('should test to add string', () => {

        calculator.add('one');
        let value = calculator.get();
        expect(value).to.be.NaN;
    });

    it('should test to subtract string', () => {

        calculator.subtract('one');
        let value = calculator.get();
        expect(value).to.be.NaN;
    });
});

