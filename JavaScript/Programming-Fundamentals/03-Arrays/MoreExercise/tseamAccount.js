function tseamAccount(stringArray) {

    let gameAccountArray = stringArray.shift().split(' ');

    while (stringArray.includes('Play!')) {

        let countArray = stringArray.shift().split(' ');
        let command = countArray[0];
        let game = countArray[1];

        switch (command) {

            case 'Install':

                if (!gameAccountArray.includes(game)) {
                    gameAccountArray.push(game);
                }

                break;

            case 'Uninstall':

                if (gameAccountArray.includes(game)) {
                    let gameIndex = gameAccountArray.indexOf(game);
                    gameAccountArray.splice(gameIndex, 1);
                }

                break;

            case 'Update':

                if (gameAccountArray.includes(game)) {

                    let gameIndex = gameAccountArray.indexOf(game);
                    let updatedGame = gameAccountArray.splice(gameIndex, 1);
                    gameAccountArray.push(updatedGame.toString());
                }

                break;

            case 'Expansion':

                let gameExpansionString = game.split('-');
                let gameExpansion = gameExpansionString[0];
                let expansion = gameExpansionString[1];

                if (gameAccountArray.includes(gameExpansion)) {

                    let gameIndex = gameAccountArray.indexOf(gameExpansion);
                    let newGameExpansionString = (`${gameExpansion}:${expansion}`);
                    gameAccountArray.splice(gameIndex + 1, 0, newGameExpansionString);
                }

                break;
        }
    }

    console.log(gameAccountArray.join(' '));
}

// tseamAccount(['CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
//     'Play!']);

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);