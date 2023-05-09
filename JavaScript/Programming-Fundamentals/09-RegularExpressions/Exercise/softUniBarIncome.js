function softUniBarIncome(customerArray) {
 
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9.]+)\$/g;
    let totalIncome = 0;
    let command = customerArray.shift();
 
    while (command != 'end of shift') {
 
        let currentData = pattern.exec(command);
 
        if (currentData) {
            let currentCutomer = currentData.groups['customer'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);
 
            let totalPrice = currentCount * currentPrice;
 
            console.log(`${currentCutomer}: ${currentProduct} - ${totalPrice.toFixed(2)}`);
 
            totalIncome += totalPrice;
            command = customerArray.shift();
            currentData = pattern.exec(command);
 
        } else {
            command = customerArray.shift();
        }
    }
 
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
 
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);