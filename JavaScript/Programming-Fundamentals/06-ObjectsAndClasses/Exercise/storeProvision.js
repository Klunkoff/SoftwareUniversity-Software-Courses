function storeProvision(stockArray, orderedStockArray) {

    let stockObject = {};

    for (let i = 0; i < stockArray.length; i++) {

        if (i % 2 == 0) {
            stockObject[stockArray[i]] = null;

        } else {
            stockObject[stockArray[i - 1]] = Number(stockArray[i]);
        }
    }

    for (let j = 0; j < orderedStockArray.length; j++) {

        if (j % 2 == 0) {

            if (!stockArray.includes(orderedStockArray[j])) {
                stockObject[orderedStockArray[j]] = Number(orderedStockArray[j + 1]);

            } else {
                stockObject[orderedStockArray[j]] += Number(orderedStockArray[j + 1]);
            }
        }
    }

    let keys = Object.keys(stockObject);

    for (let key of keys) {

        let value = stockObject[key];
        console.log(`${key} -> ${value}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
// ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);
