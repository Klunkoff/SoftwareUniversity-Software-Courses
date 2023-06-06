function fruit(fruitType, weightInGrams, pricePerKilo) {
 
    let weightInKilograms = weightInGrams / 1000;
    let totalMoney = weightInKilograms * pricePerKilo;
 
    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitType}.`);
}
 
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);