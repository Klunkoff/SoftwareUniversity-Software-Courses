function storage(arrayOfProducts) {

    let storeObject = {};

    for (let element of arrayOfProducts) {

        let [currentProduct, currentQuantity] = element.split(' ');

        if (storeObject.hasOwnProperty(currentProduct)) {
            storeObject[currentProduct] += Number(currentQuantity);

        } else {
            storeObject[currentProduct] = Number(currentQuantity);
        }
    }

    for (let products in storeObject) {
        console.log(`${products} -> ${storeObject[products]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
// storage(['apple 50',
//     'apple 61',
//     'coffee 115',
//     'coffee 40']);