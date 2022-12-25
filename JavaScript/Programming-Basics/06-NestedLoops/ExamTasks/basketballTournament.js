function solve(input) {

    let index = 0;
    let entryData = input[index];
    index++;

    let wins = 0;
    let losts = 0;

    while (entryData !== 'End of tournaments') {

        let tournamentName = entryData;
        let gameNum = Number(input[index]);
        index++;

        for (let i = 1; i <= gameNum; i++) {

            let teamDesiScores = Number(input[index]);
            index++;
            let teamEnemyScores = Number(input[index]);
            index++;

            if (teamDesiScores > teamEnemyScores) {

                wins++;
                let winResult = teamDesiScores - teamEnemyScores;

                console.log(`Game ${i} of tournament ${tournamentName}: win with ${winResult} points.`);

            } else {

                losts++;
                let lostResult = teamEnemyScores - teamDesiScores;

                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${lostResult} points.`);
            }
        }

        entryData = input[index];
        index++;
    }

    let allGames = wins + losts;
    let winPercent = (wins / allGames) * 100;
    let lostPercent = (losts / allGames) * 100;

    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${lostPercent.toFixed(2)}% matches lost`);
}

solve(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98",
    "66", "45", "End of tournaments"]);
// solve(["Ballers","3","87","63","56","65","75","64","Sharks","4","64","76","65",
// "86","68","99","45","78","End of tournaments"]);