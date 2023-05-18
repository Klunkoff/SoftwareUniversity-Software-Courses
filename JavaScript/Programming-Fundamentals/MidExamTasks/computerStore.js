function computerStore(array) {
 
    let customerType = array.pop();
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let total = 0;
 
    for (let price of array) {
 
        let countPrice = Number(price);
 
        if (countPrice < 0) {
            console.log(`Invalid price!`);
 
            continue;
        }
 
        priceWithoutTaxes += countPrice;
        taxes += countPrice * 0.2;
    }
 
    total = priceWithoutTaxes + taxes;
 
    if (total == 0) {
        console.log(`Invalid order!`);
 
    } else if (customerType == 'special') {
        total *= 0.9;
    }
 
    if (total > 0) {
 
        function printReceipt(priceWithoutTaxes, taxes, total) {
 
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${total.toFixed(2)}$`);
        }
 
        printReceipt(priceWithoutTaxes, taxes, total);
    }
}
 
// computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66',
    '19.30', 'regular']);
// computerStore(['regular']);