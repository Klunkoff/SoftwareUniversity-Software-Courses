function storeProvision(stockArray, orderedStockArray) {

    let stockObject = {};

    let stockArrayL = stockArray.length;
    let orderedStockArrayL = orderedStockArray.length;

    for (let i = 0; i < stockArrayL; i += 2) {

        let productName = stockArray[i];
        stockObject[productName] = Number(stockArray[i + 1]);
    }

    for (let j = 0; j < orderedStockArrayL; j += 2) {

        let productName = orderedStockArray[j];

        if (!stockObject.hasOwnProperty(productName)) {
            stockObject[productName] = Number(orderedStockArray[j + 1]);

        } else {
            stockObject[productName] += Number(orderedStockArray[j + 1]);
        }
    }

    for (let product in stockObject) {

        console.log(`${product} -> ${stockObject[product]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);