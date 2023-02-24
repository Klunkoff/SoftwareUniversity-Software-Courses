function orders(product, quantity) {
 
    let totalPrice = null;
 
    switch (product) {
 
        case 'coffee': totalPrice = (q) => 1.50 * q; break;
        case 'coke': totalPrice = (q) => 1.40 * q; break;
        case 'water': totalPrice = (q) => 1 * q; break;
        case 'snacks': totalPrice = (q) => 2 * q; break;
    }
 
    console.log(totalPrice(quantity).toFixed(2));
}
 
orders('water', 5);
orders('coffee', 2);
orders('snacks', 7);
orders('coke', 4);