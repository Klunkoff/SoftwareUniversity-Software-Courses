function juiceFlavors(productsArray) {
 
    bottledJuiceType = [];
    juiceObject = {};
 
    productsArray.forEach((product) => {
 
        let [type, quantity] = product.split(' => ');
        quantity = Number(quantity);
 
        if (!juiceObject.hasOwnProperty(type)) {
            juiceObject[type] = 0;
        }
 
        juiceObject[type] += quantity;
 
        if (juiceObject[type] >= 1000 && !bottledJuiceType.includes(type)){
            bottledJuiceType.push(type);
        }
    });
 
    bottledJuiceType.forEach((juice) => {
        console.log(`${juice} => ${Math.trunc(juiceObject[juice] / 1000)}`);
    });
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);