function easterEggsBattle(input) {

    let firstPlayerEggs = Number(input.shift());
    let secondPlayerEggs = Number(input.shift());
    let command = input.shift();

    let isWinner = false;

    while (command !== 'End') {

        let currentPlayer = command;

        switch (currentPlayer) {

            case 'one': secondPlayerEggs--; break;
            case 'two': firstPlayerEggs--; break;
        }

        if (firstPlayerEggs == 0) {

            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);

            isWinner = true;

            break;

        } else if (secondPlayerEggs == 0) {

            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);

            isWinner = true;

            break;
        }

        command = input.shift();
    }

    if (!isWinner) {

        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}

easterEggsBattle(['5', '4', 'one', 'two', 'one', 'two', 'two', 'End']);
easterEggsBattle(['2', '6', 'one', 'two', 'two',]);