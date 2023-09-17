const { flowerShop } = require("./flowerShop");
const { expect } = require('chai');

describe('flowerShop', () => {

    it('calcPriceOfFlowers method', () => {

        expect(flowerShop.calcPriceOfFlowers('Tulip', 10, 5)).equal('You need $50.00 to buy Tulip!');
        expect(flowerShop.calcPriceOfFlowers('Rose', 5, 5)).equal('You need $25.00 to buy Rose!');

        expect(flowerShop.calcPriceOfFlowers.bind(5, 5, 5)).throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('Rose', '5', 5)).throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('Rose', 5, '5')).throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind(5, 5, '5')).throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('Rose', '5', '5')).throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind(5, '5', '5')).throw('Invalid input!');
    });

    it ('checkFlowersAvailable method', () => {

        expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).equal('The Rose are available!');
        expect(flowerShop.checkFlowersAvailable('Tulip', ["Rose", "Lily", "Orchid"])).equal('The Tulip are sold! You need to purchase more!');
    });

    it ('sellFlowers method', () => {

        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).equal('Rose / Orchid');
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).equal('Rose / Lily');

        expect(flowerShop.sellFlowers.bind(["Rose", "Lily", "Orchid"], -1)).throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(["Rose", "Lily", "Orchid"], 5)).throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(["Rose", "Lily", "Orchid"], '5')).throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind('ss', '5')).throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind('ss', 2)).throw('Invalid input!');
    });
});