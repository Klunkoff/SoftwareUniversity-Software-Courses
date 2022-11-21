function solve(input) {

    let index = 0;
    let tripCost = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let daySum = input[index];
    index++;

    let spendDays = 0;
    let overalDays = 0;
    let isSpendDays = false;

    while (salary < tripCost) {

        overalDays++;
        daySum = Number(daySum);

        if (action === 'spend') {

            spendDays++;
            salary -= daySum;

            if (salary < 0) {

                salary = 0;
            }

            if (spendDays >= 5) {

                isSpendDays = true;

                break;
            }
        }

        if (action === 'save') {

            salary += daySum;
            spendDays = 0;
        }

        action = input[index];
        index++;
        daySum = input[index];
        index++;
    }

    if (isSpendDays === true) {

        console.log(`You can't save the money.`);
        console.log(`${overalDays}`);

    } else {

        console.log(`You saved the money for ${overalDays} days.`);
    }
}

solve(["2000", "1000", "spend", "1200", "save", "2000"]);
// solve(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);
// solve(["250","150","spend","50","spend","50","save","100","save","100"]);