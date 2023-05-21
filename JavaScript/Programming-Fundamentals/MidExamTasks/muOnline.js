function muOnline(inputData) {

    let array = inputData[0].split('|');

    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isKilled = false;

        for (let element of array) {

            let commandArray = element.split(' ');
            let command = commandArray[0];
            let number = Number(commandArray[1]);
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
                    console.log(`You found ${number} bitcoins.`);

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
    

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);