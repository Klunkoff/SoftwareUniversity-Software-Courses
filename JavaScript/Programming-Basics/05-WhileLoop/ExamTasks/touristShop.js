function solve(input) {

    let indexPrice = 2;
    let indexProduct = 1;
    let budget = Number(input[0]);

    let productCost = 0;
    let productCount = 0;

    for (i = 1; i < input.length; i++) {

        let productPrice = Number(input[indexPrice]);
        let productName = input[indexProduct];
        indexProduct += 2;

        if (indexPrice % 3 === 0) {

            productPrice /= 2;
        }

        if (productName === 'Stop') {

            console.log(`You bought ${productCount} products for ${productCost.toFixed(2)} leva.`);

            break;
        }
        
        productCount++;
        productCost += productPrice;
        budget -= productPrice;
        indexPrice += 2;

        if (budget < 0) {

            let result = Math.abs(budget);
            console.log(`You don't have enough money!`);
            console.log(`You need ${result.toFixed(2)} leva!`);

            break;
        }
    }
}

//solve(["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"]);
solve(["54", "Thermal underwear", "24", "Sunscreen", "45"]);