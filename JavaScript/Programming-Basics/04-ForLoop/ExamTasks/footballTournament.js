function solve(input) {

    let index = 0;
    let teamName = input[index];
    index++;
    let gameNumber = Number(input[index]);
    index++;

    let scores = 0;

    let countW = 0;
    let countD = 0;
    let countL = 0;

    for (let i = 1; i <= gameNumber; i++) {

        let countGame = input[index];
        index++;

        switch (countGame) {

            case 'W': scores += 3; countW++; break;
            case 'D': scores += 1; countD++; break;
            case 'L': countL++; break;
        }
    }

    if (gameNumber === 0) {

        console.log(`${teamName} hasn't played any games during this season.`);

    } else {

        let winPercent = countW / gameNumber * 100;

        console.log(`${teamName} has won ${scores} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${winPercent.toFixed(2)}%`);
    }
}

// solve (["Liverpool","10","W","D","D","W","L","W","D","D","W","W"]);
// solve (["Barcelona","7","W","D","L","L","W","W","D"]);
solve(["Chelsea", "0"]);
