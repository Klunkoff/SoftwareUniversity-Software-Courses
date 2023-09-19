const { rentCar } = require("./rentCar");
const { expect } = require('chai');


describe('rentCar test', () => {

    it('searchCar method', () => {

        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'BMW')).equal(`There is 2 car of model BMW in the catalog!`);
        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'Audi')).equal(`There is 1 car of model Audi in the catalog!`);

        expect(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'Toyota') }).throw(`There are no such models in the catalog!`);

        expect(rentCar.searchCar.bind(["Volkswagen", "BMW", "Audi", "BMW"], 2)).throw(`Invalid input!`);
        expect(rentCar.searchCar.bind(2, 'Toyota')).throw(`Invalid input!`);
        expect(rentCar.searchCar.bind(2, 2)).throw(`Invalid input!`);

    });

    it('calculatePriceOfCar method', () => {

        expect(rentCar.calculatePriceOfCar('BMW', 1)).equal(`You choose BMW and it will cost $45!`);
        expect(rentCar.calculatePriceOfCar('Toyota', 3)).equal(`You choose Toyota and it will cost $120!`); // need this additional test go give 100/100

        expect(() => { rentCar.calculatePriceOfCar('Subaru', 1) }).throw('No such model in the catalog!');

        expect(() => { rentCar.calculatePriceOfCar('Subaru', '1') }).throw('Invalid input!');
        expect(() => { rentCar.calculatePriceOfCar(1, 1) }).throw('Invalid input!');
        expect(() => { rentCar.calculatePriceOfCar(1, '1') }).throw('Invalid input!');
    });

    it('checkBudget method', () => {

        expect(rentCar.checkBudget(50, 1, 100)).equal(`You rent a car!`);
        expect(rentCar.checkBudget(50, 1, 50)).equal(`You rent a car!`);
        expect(rentCar.checkBudget(50, 1, 20)).equal(`You need a bigger budget!`);

        expect(() => { rentCar.checkBudget('1', 1, 1) }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget(1, '1', 1) }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget(1, 1, '1') }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget(1, '1', '1') }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget('1', '1', 1) }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget('1', '1', 1) }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget('1', 1, '1') }).throw('Invalid input!');
        expect(() => { rentCar.checkBudget('1',' 1', '1') }).throw('Invalid input!');
    });
});