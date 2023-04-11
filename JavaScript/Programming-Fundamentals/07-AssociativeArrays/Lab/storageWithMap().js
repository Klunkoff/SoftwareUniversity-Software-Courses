function storageWithMap(arrayOfProducts) {

    let storageMap = new Map();

    for (let element of arrayOfProducts) {

        [currentProduct, currentQuantity] = element.split(' ');
        currentQuantity = Number(currentQuantity);

        if (storageMap.has(currentProduct)) {
            let storageQuantity = storageMap.get(currentProduct);
            storageMap.set(currentProduct, (storageQuantity + currentQuantity));

        } else {
            storageMap.set(currentProduct, currentQuantity);
        }
    }

    for (let [product, quantity] of storageMap) {
        console.log(`${product} -> ${quantity}`);
    }
}

storageWithMap(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
// storageWithMap(['apple 50',
//     'apple 61',
//     'coffee 115',
//     'coffee 40']);