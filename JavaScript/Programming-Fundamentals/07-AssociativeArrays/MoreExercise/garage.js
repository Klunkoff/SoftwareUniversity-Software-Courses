function garage(carArray) {
 
    let garageObject = {};
 
    for (let carInfo of carArray) {
 
        let currentCarInfo = carInfo.split(' - ');
        let garageNumber = currentCarInfo.shift();
        let currentCarValue = String(currentCarInfo).split(': ').join(' - ');
 
        if (!garageObject[garageNumber]) {
            garageObject[garageNumber] = [];
        }
 
        garageObject[garageNumber].push(currentCarValue);
    }
 
    for (let key in garageObject) {
 
        console.log(`Garage № ${key}`);
 
        for (let carValue of garageObject[key]) {
            console.log(`--- ${carValue}`);
        }
    }
}
 
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
 
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);