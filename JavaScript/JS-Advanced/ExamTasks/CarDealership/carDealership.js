class CarDealership {
 
    constructor(name) {
 
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
 
    addCar(model, horsepower, price, mileage) {
 
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
 
            throw new Error('Invalid input!');
        }
 
        this.availableCars.push({ model, horsepower, price, mileage });
 
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
 
    sellCar(model, desiredMileage) {
 
        let findedModel = this.availableCars.find((car) => car.model == model);
 
        if (!findedModel) {
            throw new Error(`${model} was not found!`);
        }
 
        let mileageDifference = findedModel.mileage - desiredMileage;
 
        if (mileageDifference <= 40000 && mileageDifference > 0) {
 
            findedModel.price *= 0.95;
 
        } else if (mileageDifference > 40000) {
 
            findedModel.price *= 0.90;
        }
 
        let findedModelIndex = this.availableCars.indexOf(findedModel);
        this.availableCars.splice(findedModelIndex, 1);
 
        this.soldCars.push({ model: findedModel.model, horsepower: findedModel.horsepower, soldPrice: findedModel.price });
 
        this.totalIncome += findedModel.price;
 
        return `${model} was sold for ${findedModel.price.toFixed(2)}$`;
    }
 
    currentCar() {
 
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }
 
        let result = ['-Available cars:'];
 
        this.availableCars.forEach((car) => result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));
 
        return result.join('\n');
    }
 
    salesReport(criteria) {
 
        if (criteria == 'horsepower') {
 
            this.soldCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
 
        } else if (criteria == 'model') {
 
            this.soldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
 
        } else {
 
            throw new Error('Invalid criteria!');
        }
 
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach((car) => result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));
 
        return result.join('\n');
    }
}
 
 
// input 1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));
 
// input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
 
// input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
 
// input 4
 
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));