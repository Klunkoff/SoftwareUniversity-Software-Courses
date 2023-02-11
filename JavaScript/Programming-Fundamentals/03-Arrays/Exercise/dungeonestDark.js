function dungeonestDark(inputData) {

    let array = inputData[0].split('|');

    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isKilled = false;

    battleElement(array);

    function battleElement(battleArray) {

        for (let element of battleArray) {

            let [command, number] = element.split(' ');
            number = Number(number);
            roomCount++;

            switch (command) {

                case 'potion':

                    health += number;

                    if (health > 100) {
                        let difference = number - (health - 100);
                        health = 100;
                        console.log(`You healed for ${difference} hp.`);

                    } else {
                        console.log(`You healed for ${number} hp.`);
                    }

                    console.log(`Current health: ${health} hp.`);

                    break;

                case 'chest':
                    
                    coins += number;
                    console.log(`You found ${number} coins.`);

                    break;

                default:

                    health -= number;

                    if (health > 0) {
                        console.log(`You slayed ${command}.`);

                    } else {
                        console.log(`You died! Killed by ${command}.`);
                        console.log(`Best room: ${roomCount}`);

                        isKilled = true;
                    }

                    break;
            }

            if (isKilled) {
                break;
            }
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);