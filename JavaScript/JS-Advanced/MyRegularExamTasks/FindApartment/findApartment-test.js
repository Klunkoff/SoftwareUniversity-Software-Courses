const { findNewApartment } = require("./findApartment");
const { expect } = require("chai");
const { assert } = require("chai");


describe('test findNewApartment', () => {

    it('tests isGoodLocation method with valid params', () => {

        expect(findNewApartment.isGoodLocation('Sofia', true)).equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation('Plovdiv', true)).equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation('Varna', true)).equal('You can go on home tour!');

        expect(findNewApartment.isGoodLocation('Varna', false)).equal('There is no public transport in area.');

        expect(findNewApartment.isGoodLocation('Pernik', false)).equal('This location is not suitable for you.');
        expect(findNewApartment.isGoodLocation('Pernik', true)).equal('This location is not suitable for you.');
    });

    it('tests isGoodLocation method with Invalid params', () => {

        expect(() => findNewApartment.isGoodLocation(3, true)).to.throw('Invalid input!');
        expect(() => findNewApartment.isGoodLocation('Sofia', 'proba')).to.throw('Invalid input!');
        expect(() => findNewApartment.isGoodLocation([3], 'proba')).to.throw('Invalid input!');
        
    });

    it('test isLargeEnough method with valid params', () => {

        expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).equal('50, 60');
        expect(findNewApartment.isLargeEnough([40, 50, 60], 80)).equal('');
        expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).equal('60');
        expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).equal('40, 50, 60');
    });

    it('test isLargeEnough method with Invalid params', () => {

        expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!');
        expect(() => findNewApartment.isLargeEnough(3, 50)).to.throw('Invalid input!');
        expect(() => findNewApartment.isLargeEnough('proba', 50)).to.throw('Invalid input!');
        expect(() => findNewApartment.isLargeEnough([50, 60, 70], 'proba')).to.throw('Invalid input!');
        
    });

    it('test isItAffordable method with valid params', () => {

        expect(findNewApartment.isItAffordable(200, 500)).equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(200, 200)).equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(200, 100)).equal("You don't have enough money for this house!");
        
    });

    it('test isItAffordable method with valid params', () => {

        expect(() => findNewApartment.isItAffordable('proba', 500)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(300, 'proba')).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(300, 0)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(300, -1)).to.throw('Invalid input!');
        expect(() => findNewApartment.isItAffordable(300, -100)).to.throw('Invalid input!');

    });

});

