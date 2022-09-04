function solve(input) {
 
    let fuelType = input[0];
    let fuelAmount = Number(input[1]);
    let clubCard = input[2];
 
    let price = 0;
 
    if (clubCard === 'Yes') {
 
        switch (fuelType) {
 
            case 'Gasoline': price = (2.22 - 0.18) * fuelAmount; break;
            case 'Diesel': price = (2.33 - 0.12) * fuelAmount; break;
            case 'Gas': price = (0.93 - 0.08) * fuelAmount; break;
        }
 
    } else if (clubCard === 'No') {
 
        switch (fuelType) {
 
            case 'Gasoline': price = 2.22 * fuelAmount; break;
            case 'Diesel': price = 2.33 * fuelAmount; break;
            case 'Gas': price = 0.93 * fuelAmount; break;
        }
    }
 
    if (fuelAmount >= 20 && fuelAmount <= 25) {
 
        price *= 0.92;
 
    } else if (fuelAmount > 25) {
 
        price *= 0.90;
    }
 
    console.log(`${price.toFixed(2)} lv.`);
}
 
solve(['Gas', '30', 'Yes']);
solve(['Gasoline', '25', 'No']);
solve(['Diesel', '19', 'No']);