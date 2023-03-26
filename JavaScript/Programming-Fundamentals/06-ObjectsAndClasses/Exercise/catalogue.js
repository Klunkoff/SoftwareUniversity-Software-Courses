function catalogue(productArray) {

    let catalogueObject = {};

    for (let product of productArray) {

        let [currentProduct, currentPrice] = product.split(' : ');
        currentPrice = Number(currentPrice);
        let catalogueLetter = currentProduct[0];

        if (!catalogueObject.hasOwnProperty(catalogueLetter)) {
            catalogueObject[catalogueLetter] = { [currentProduct]: currentPrice };

        } else {
            catalogueObject[catalogueLetter][currentProduct] = currentPrice;
        }
    }

    let sortedByLetter = Object.entries(catalogueObject).sort((a, b) => a[0].localeCompare(b[0]));

    for (let letter of sortedByLetter) {

        console.log(letter[0]);
        let sortedByProduct = Object.entries(letter[1]).sort((a, b) => a[0].localeCompare(b[0]));

        for (let product of sortedByProduct) {

            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ]);