function solve(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let serialNumber = Number(input[index]);
    index++;

    for (let i = 1; i <= serialNumber; i++) {

        let nameCount = input[index];
        index++;
        let priceCount = Number(input[index]);
        index++;

        switch (nameCount) {

            case 'Thrones': budget -= priceCount - (priceCount * 0.5); break;
            case 'Lucifer': budget -= priceCount - (priceCount * 0.4); break;
            case 'Protector': budget -= priceCount - (priceCount * 0.3); break;
            case 'TotalDrama': budget -= priceCount - (priceCount * 0.2); break;
            case 'Area': budget -= priceCount - (priceCount * 0.1); break;

            default: budget -= priceCount;
        }
    }

    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    } else {
        budget = Math.abs(budget);
        console.log(`You need ${budget.toFixed(2)} lv. more to buy the series!`);
    }
}

// solve (["10","3","Thrones","5","Riverdale","5","Gotham","2"]);
solve(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area",
    "4", "Thrones", "5", "Lucifer", "9"]);