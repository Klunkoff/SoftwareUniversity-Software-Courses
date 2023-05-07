function furniture(furnitureArray) {
 
    let pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[0-9|\.]+)!(?<quantity>\d+)/g;
    let totalCost = 0;
    let boughtFurnitureArray = [];
 
    let command = furnitureArray.shift();
 
    while (command != 'Purchase') {
 
        let validItems = pattern.exec(command);
 
        if (validItems) {
            let currentItem = validItems.groups['item'];
            let currentPrice = Number(validItems.groups['price']);
            let currentQuantity = Number(validItems.groups['quantity']);
 
            boughtFurnitureArray.push(currentItem);
            totalCost += currentPrice * currentQuantity;
 
            command = furnitureArray.shift();
            validItems = pattern.exec(command);
 
        } else {
            command = furnitureArray.shift();
        }
    }
 
    console.log(`Bought furniture:`);
 
    for (let furniture of boughtFurnitureArray) {
        console.log(furniture);
    }
 
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
 
// furniture(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
// furniture(['>Invalid<<!4',
// '>Invalid<<!2',
// '>Invalid<<!5',
// 'Purchase']);