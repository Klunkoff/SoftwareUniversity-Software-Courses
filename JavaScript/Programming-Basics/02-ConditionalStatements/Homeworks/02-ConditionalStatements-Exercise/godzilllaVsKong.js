function solve(input) {

    let movieBudget = Number(input[0]);
    let numberPeeople = Number(input[1]);
    let dressPrice = Number(input[2]);

    let decor = movieBudget * 0.1;
    let sumDress = numberPeeople * dressPrice;

    if (numberPeeople > 150) {

        sumDress = sumDress - (sumDress * 0.1);
    }

    let totalCost = sumDress + decor;

    if (totalCost > movieBudget) {

        let result = totalCost - movieBudget;

        console.log(`Not enough money!`);
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`);

    } else if (totalCost <= movieBudget) {

        let result = movieBudget - totalCost;
        
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
    }
}

solve(['20000', '120', '55.5']);
solve(['15437.62', '186', '57.99']);
solve(['9587.88', '222', '55.68']);