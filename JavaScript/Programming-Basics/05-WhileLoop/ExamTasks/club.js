function solve(input) {

    let index = 0;
    let profit = Number(input[index]);
    index++;

    let clubIncome = 0;
    let totalBills = 0;

    for (i = 1; i < input.length; i++) {

        let counterName = input[index];
        index++;
        let counterKocktails = input[index];
        index++;

        let bills = counterName.length * counterKocktails;

        if (bills % 2 !== 0) {

            bills *= 0.75;
        }

        if (counterName === 'Party!') {

            clubIncome = Math.abs(profit - totalBills);

            console.log(`We need ${clubIncome.toFixed(2)} leva more.`);

            break;
        }

        totalBills += bills;

        if (totalBills >= profit) {

            console.log(`Target acquired.`);

            break;
        }
    }

    console.log(`Club income - ${totalBills.toFixed(2)} leva.`);
}

//solve(["500","Bellini","6","Bamboo","7","Party!"]);
solve(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);


