const { motorcycleRider } = require("./motorcycleRider");
const { expect } = require('chai');

describe('Test motorcycleRider task', () => {

    it('accepts string parameter AM', () => {

        expect(motorcycleRider.licenseRestriction('AM')).equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });

    it('accepts string parameter A1', () => {

        expect(motorcycleRider.licenseRestriction('A1')).equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });

    it('accepts string parameter A2', () => {

        expect(motorcycleRider.licenseRestriction('A2')).equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });

    it('accepts string parameter A', () => {

        expect(motorcycleRider.licenseRestriction('A')).equal('No motorcycle restrictions, and the minimum age is 24.');
    });

    it('different string parameter from AM,A1,A2,A', () => {

        expect(motorcycleRider.licenseRestriction.bind('BBB')).to.throw('Invalid Information!');
    });


    it('checks with valid parameters test 1', () => {

        expect(motorcycleRider.motorcycleShowroom(['125', '250', '600'], 125)).to.equal('There are 1 available motorcycles matching your criteria!');
    });

    it('checks with valid parameters test 2', () => {

        expect(motorcycleRider.motorcycleShowroom(['125', '250', '250', '600'], 250)).to.equal('There are 3 available motorcycles matching your criteria!');
    });

    it('checks with invalid first parameter - string', () => {

        expect(motorcycleRider.motorcycleShowroom.bind('2323', 125)).to.throw('Invalid Information!');
    });

    it('checks with invalid second parameter - string', () => {

        expect(motorcycleRider.motorcycleShowroom.bind(['125', '250', '250', '600'], '125')).to.throw('Invalid Information!');
    });

    it('checks with invalid first parameter - empty array', () => {

        expect(motorcycleRider.motorcycleShowroom.bind([], 125)).to.throw('Invalid Information!');
    });

    it('checks with invalid second parameter - less than 50', () => {

        expect(motorcycleRider.motorcycleShowroom.bind(['125', '250', '250', '600'], 49)).to.throw('Invalid Information!');
    });

    it('checks with two invalid parameters - less than 50', () => {

        expect(motorcycleRider.motorcycleShowroom.bind([], 49)).to.throw('Invalid Information!');
    });


    it('checks with valid parameters test 1', () => {

        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
    });

    it('checks with valid parameters test 2', () => {

        expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
    });

    it('checks with all invalid parameters', () => {

        expect(motorcycleRider.otherSpendings.bind('asdasd', 2323, '1')).to.throw('Invalid Information!');
    });

    it('checks with first invalid parameter', () => {

        expect(motorcycleRider.otherSpendings.bind('asdasd', ['engine oil', 'oil filter'], true)).to.throw('Invalid Information!');
    });

    it('checks with second invalid parameter', () => {

        expect(motorcycleRider.otherSpendings.bind(['helmet', 'jacked'],'asdasd', true)).to.throw('Invalid Information!');
    });

    it('checks with third invalid parameter', () => {

        expect(motorcycleRider.otherSpendings.bind(['helmet', 'jacked'],['engine oil', 'oil filter'], 20)).to.throw('Invalid Information!');
    });

});

