function storeCatalaogue(productsArray) {
 
    let catalogueObject = {};
 
    for (let product of productsArray) {
 
        let [name, price] = product.split(' : ');
        let catalogueChar = name[0];
 
        if (!catalogueObject.hasOwnProperty(catalogueChar)) {
            catalogueObject[catalogueChar] = {};
        }
 
        catalogueObject[catalogueChar][name] = Number(price);
    }
 
    let sortedKeys = Object.keys(catalogueObject).sort((a, b) => a.localeCompare(b));
 
    for (let key of sortedKeys) {
 
        console.log(key);
 
        let sortedInnerKeys = Object.keys(catalogueObject[key]).sort((a, b) => a.localeCompare(b));
 
        for (let innerKey of sortedInnerKeys) {
            console.log(`  ${innerKey}: ${catalogueObject[key][innerKey]}`);
        }
    }
}
 
// storeCatalaogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);
storeCatalaogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);