const { chooseYourCar } = require("./chooseYourCar");
const { expect } = require('chai');
 
describe ('Choose Your Car', () => {
 
    it ('choosingType', () => {
 
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).equal('This red Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2022)).equal('This blue Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).equal('This Sedan is too old for you, especially with that blue color.');
        
        expect(() => { chooseYourCar.choosingType('Sedan', 'red', 2023) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Sedan', 'red', 1899) }).to.throw('Invalid Year!');
        expect(() => { chooseYourCar.choosingType('Combi', 'red', 2012) }).to.throw('This type of car is not what you are looking for.');
 
        //.bind is not working in choosingType... Judge throw an exeption with .bind but in the code below there is no problems.....
        // expect(chooseYourCar.choosingType.bind('Combi', 'red', 2012)).to.throw('This type of car is not what you are looking for.');
        
    });
 
    it ('brandName', () => {
 
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
 
        expect(chooseYourCar.brandName.bind(["BMW", "Toyota", "Peugeot"], 3)).to.throw('Invalid Information!');
        expect(chooseYourCar.brandName.bind(["BMW", "Toyota", "Peugeot"], -1)).to.throw('Invalid Information!');
        expect(chooseYourCar.brandName.bind('blavbla', 2)).to.throw('Invalid Information!');
    });
 
    it ('CarFuelConsumption', () => {
 
        expect(chooseYourCar.carFuelConsumption(200,20)).to.equal('The car burns too much fuel - 10.00 liters!');
        expect(chooseYourCar.carFuelConsumption(200,10)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(200,14)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
 
        expect(chooseYourCar.carFuelConsumption.bind(-200, 20)).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption.bind(200, -20)).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption.bind(-200, -20)).to.throw('Invalid Information!');
 
        expect(chooseYourCar.carFuelConsumption.bind('200', 20)).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption.bind(200, '20')).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption.bind('200', '20')).to.throw('Invalid Information!');
    });
});