function solve(input) {

    let index = 0;

    let tournamentNum = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let finalPoints = 0;
    let averagePoints = 0;
    let tournamentWin = 0;

    for (i = 1; i <= tournamentNum; i++) {

        let tournamentCount = input[index];
        index++;

        switch (tournamentCount) {

            case 'W': finalPoints += 2000; tournamentWin++; break;
            case 'F': finalPoints += 1200; break;
            case 'SF': finalPoints += 720; break;
        }
    }

    let winPercent = (tournamentWin / tournamentNum) * 100;
    averagePoints = Math.floor(finalPoints / tournamentNum);

    console.log(`Final points: ${finalPoints + startingPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

//solve(["5", "1400","F","SF","W","W","SF"]);
//solve(["4","750","SF","W","SF","W"]);
solve(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);