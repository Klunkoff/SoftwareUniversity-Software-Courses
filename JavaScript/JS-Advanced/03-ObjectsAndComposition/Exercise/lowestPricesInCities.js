function lowestPricesInCities(inputData) {

    let storeObject = {};

    for (let data of inputData) {

        let [town, product, price] = data.split(' | ');
        price = Number(price);

        if (!storeObject.hasOwnProperty(product)) {
            storeObject[product] = [price, town];
        }

        if (storeObject[product][0] > price) {
            storeObject[product] = [price, town];
        }
    }

    for (let key in storeObject) {
        console.log(`${key} -> ${storeObject[key][0]} (${storeObject[key][1]})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
// lowestPricesInCities([`Sofia City | Audi | 100000`,
//     `Sofia City | BMW | 100000`,
//     `Sofia City | Mitsubishi | 10000`,
//     `Sofia City | Mercedes | 10000`,
//     `Sofia City | NoOffenseToCarLovers | 0`,
//     `Mexico City | Audi | 1000`,
//     `Mexico City | BMW | 99999`,
//     `Mexico City | Mitsubishi | 10000`,
//     `New York City | Mitsubishi | 1000`,
//     `Washington City | Mercedes | 1000`]);