function solve(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;

    let allSum = 0;
    let allDayWins = 0;
    let allDayLosts = 0;

    for (i = 1; i <= days; i++) {

        let entryData = input[index];
        index++;

        let dayWins = 0;
        let dayLosts = 0;
        let daySum = 0;

        while (entryData !== 'Finish') {

            let countGame = entryData;
            let countResult = input[index];
            index++;

            switch (countResult) {

                case 'win': daySum += 20; dayWins++; break;
                case 'lose': dayLosts++; break;
            }

            entryData = input[index];
            index++;
        }

        if (dayWins > dayLosts) {

            daySum += daySum * 0.1;
            allDayWins++;

        } else {

            allDayLosts++;
        }

        allSum += daySum;
    }

    if (allDayWins > allDayLosts) {

        allSum += allSum * 0.2;

        console.log(`You won the tournament! Total raised money: ${allSum.toFixed(2)}`);

    } else {

        console.log(`You lost the tournament! Total raised money: ${allSum.toFixed(2)}`);
    }
}

solve(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf",
    "win", "tennis", "win", "badminton", "win", "Finish"]);
// solve(["3","darts","lose","handball","lose","judo","win","Finish","snooker","lose",
// "swimming","lose","squash","lose","table tennis","win","Finish","volleyball","win",
// "basketball","win","Finish"]);