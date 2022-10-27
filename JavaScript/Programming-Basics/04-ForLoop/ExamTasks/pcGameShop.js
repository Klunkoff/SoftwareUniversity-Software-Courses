function solve(input) {

    let index = 0;
    let gameNumber = Number(input[index]);
    index++;

    let hearthstoneCount = 0;
    let forniteCount = 0;
    let overwatchCount = 0;
    let othersCount = 0;

    for (let i = 1; i <= gameNumber; i++) {

        let gameCount = input[index];
        index++;

        switch (gameCount) {

            case 'Hearthstone': hearthstoneCount++; break;
            case 'Fornite': forniteCount++; break;
            case 'Overwatch': overwatchCount++; break;

            default: othersCount++; break;
        }
    }

    let heartstonePercent = hearthstoneCount / gameNumber * 100;
    let fornitePercent = forniteCount / gameNumber * 100;
    let overwatchPercent = overwatchCount / gameNumber * 100;
    let othersPercent = othersCount / gameNumber * 100;

    console.log(`Hearthstone - ${heartstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);
}

// solve(["4","Hearthstone","Fornite","Overwatch","Counter-Strike"]);
solve(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);