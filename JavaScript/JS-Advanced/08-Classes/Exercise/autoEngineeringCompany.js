function autoEngineeringCompany(inputData) {
 
    let carObject = {};
 
    for (let data of inputData) {
 
        let [carBrand, carModel, producedCars] = data.split(' | ');
        producedCars = Number(producedCars);
 
        if (!carObject.hasOwnProperty(carBrand)) {
 
            carObject[carBrand] = {
                [carModel]: 0,
            }
        }
 
        if (!carObject[carBrand].hasOwnProperty(carModel)) {
            carObject[carBrand][carModel] = 0;
        }
 
        carObject[carBrand][carModel] += producedCars;
    }
 
    for (let brand in carObject) {
 
        console.log(brand);
 
        for (let model in carObject[brand]) {
 
            let producedCars = carObject[brand][model]
            console.log(`###${model} -> ${producedCars}`);
        }
    }
}
 
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);