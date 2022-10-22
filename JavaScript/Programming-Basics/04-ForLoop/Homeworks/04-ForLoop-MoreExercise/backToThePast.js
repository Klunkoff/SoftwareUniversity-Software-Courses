function solve(input) {

    let budget = Number(input[0]);
    let year = Number(input[1]);

    let ivanYears = 18;

    for (let i = 1800; i <= year; i++) {

        if (i % 2 === 0) {
            budget -= 12000;
        } else {
            budget -= 12000 + (ivanYears * 50);
        }

        ivanYears++;
    }

    if (budget >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${budget.toFixed(2)} dollars left.`);
    } else {
        let result = Math.abs(budget);
        console.log(`He will need ${result.toFixed(2)} dollars to survive.`);
    }
}

// solve(['50000', '1802']);
solve(['100000.15', '1808']);