const { carService } = require("./carServiceResources");
const { expect } = require('chai');
 
describe ('Car Service test', () => {
 
    it ('isItExpensive method', () => {
 
        expect(carService.isItExpensive('Engine')).equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Door')).equal('The overall price will be a bit cheaper');
    });
 
    it ('discount method', () => {
 
        expect(carService.discount(1, 50)).equal('You cannot apply a discount');
        expect(carService.discount(2, 50)).equal('You cannot apply a discount');
 
        expect(carService.discount(3, 100)).equal('Discount applied! You saved 15$');
        expect(carService.discount(5, 100)).equal('Discount applied! You saved 15$');
        expect(carService.discount(7, 100)).equal('Discount applied! You saved 15$');
 
        expect(carService.discount(10, 100)).equal('Discount applied! You saved 30$');
 
        expect(carService.discount.bind('10', 100)).throw('Invalid input');
        expect(carService.discount.bind(10, '100')).throw('Invalid input');
        expect(carService.discount.bind('10', '100')).throw('Invalid input');
    });
 
    it ('partsToBuy method', () => {
 
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).equal(145);
        expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).equal(0);
 
        expect(carService.partsToBuy.bind(2323, ["blowoff valve", "injectors"])).throw('Invalid input');
        expect(carService.partsToBuy.bind(2323, 232323)).throw('Invalid input');
        expect(carService.partsToBuy.bind([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 232323)).throw('Invalid input');
    });
});