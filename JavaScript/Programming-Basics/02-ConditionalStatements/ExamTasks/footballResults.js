function solve(input) {

    let game1 = input[0];
    let firstNumG1 = Number(game1[0]);
    let secondNumG1 = Number(game1[2]);

    let game2 = input[1];
    let firstNumG2 = Number(game2[0]);
    let secondNumG2 = Number(game2[2]);

    let game3 = input[2];
    let firstNumG3 = Number(game3[0]);
    let secondNumG3 = Number(game3[2]);

    let wons = 0;
    let losts = 0;
    let drawns = 0;

    if (firstNumG1 > secondNumG1) {

        wons++;

    } else if (firstNumG1 === secondNumG1) {

        drawns++;

    } else {

        losts++;
    }

    if (firstNumG2 > secondNumG2) {

        wons++;

    } else if (firstNumG2 === secondNumG2) {

        drawns++;

    } else {

        losts++;
    }

    if (firstNumG3 > secondNumG3) {

        wons++;

    } else if (firstNumG3 === secondNumG3) {

        drawns++;

    } else {

        losts++;
    }

    console.log(`Team won ${wons} games.`);
    console.log(`Team lost ${losts} games.`);
    console.log(`Drawn games: ${drawns}`);
}

// solve(["3:1","0:2","0:0"]);
// solve(["4:2","0:3","1:0"]);
solve(["0:2", "0:1", "3:3"]);