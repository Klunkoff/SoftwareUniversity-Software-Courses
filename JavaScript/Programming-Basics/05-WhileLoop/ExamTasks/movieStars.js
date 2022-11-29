function solve(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let entryData = input[index];
    index++;

    while (entryData !== 'ACTION') {

        if (entryData.length > 15) {

            budget -= budget * 0.2;
            entryData = input[index];
            index++;

        } else {

            entryData = input[index];
            index++;
            let honorar = Number(entryData);
            budget -= honorar;
            entryData = input[index];
            index++;
        }

        if (budget <= 0) {

            break;
        }
    }

    if (budget >= 0) {

        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    } else {

        budget = Math.abs(budget);
        console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
    }
}

// solve(["90000","Christian Bale","70000.50","Leonard DiCaprio","Kevin Spacey","24000.99"]);
// solve(["170000","Ben Affleck","40000.50","Zahari Baharov","80000","Tom Hanks","2000.99","ACTION"]);
solve([`2100000`,
    `Frederic Gustafsson I`,
    `Frederic Gustafsson II`,
    `Frederic Gustafsson III`,
    `Frederic Gustafsson IV`,
    `Frederic Gustafsson V`,
    `Frederic Gustafsson VI`,
    `Frederic Gustafsson VII`,
    `Frederic Gustafsson VIII`,
    `Frederic Gustafsson IX`,
    `Frederic Gustafsson X`,
    `Frederic Gustafsson XI`,
    `Frederic Gustafsson XII`,
    `ACTION`]);
// solve ([`2100000`,`Homer Simpson`,`1000000`,`Tsvetomir Ivanovich`,`ACTION`]);