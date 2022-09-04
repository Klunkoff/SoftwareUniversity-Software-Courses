function solve(input) {
 
    let fuelType = String(input[0]);
    let litersFuel = Number(input[1]);
 
    switch (fuelType) {
 
        case 'Diesel':
        case 'Gasoline':
        case 'Gas':
 
            if (litersFuel >= 25) {
 
                console.log(`You have enough ${fuelType}.`);
 
            } else {
 
                console.log(`Fill your tank with ${fuelType}!`);
            }
 
            break;
 
        default: console.log(`Invalid fuel!`); break;
    }
}
 
solve(['Diesel', '10']);
solve(['Gasoline', '40']);
solve(['Whiskey', '200']);