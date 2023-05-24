function spaceTravel(inputDataArray) {

    let commandArray = inputDataArray.shift().split('||');
    let shipFuel = Number(inputDataArray.shift());
    let shipAmmunition = Number(inputDataArray.shift());

    let command = commandArray.shift();

    while (command !== 'Titan') {

        let [currentCommand, currentInteger] = command.split(' ');
        currentInteger = Number(currentInteger);

        switch (currentCommand) {

            case 'Travel':

                shipFuel -= currentInteger;

                if (shipFuel < 0) {
                    console.log(`Mission failed.`);

                    return;

                } else {
                    console.log(`The spaceship travelled ${currentInteger} light-years.`);
                }

                break;

            case 'Enemy':

                if (shipAmmunition >= currentInteger) {
                    shipAmmunition -= currentInteger;
                    console.log(`An enemy with ${currentInteger} armour is defeated.`);

                } else {
                    shipFuel -= (currentInteger * 2);

                    if (shipFuel < 0) {
                        console.log(`Mission failed.`);

                        return;

                    } else {
                        console.log(`An enemy with ${currentInteger} armour is outmaneuvered.`);
                    }
                }

                break;

            case 'Repair':

                shipFuel += currentInteger;
                shipAmmunition += (currentInteger * 2);

                console.log(`Ammunitions added: ${(currentInteger * 2)}.`);
                console.log(`Fuel added: ${currentInteger}.`);

                break;
        }

        command = commandArray.shift();
    }

    console.log(`You have reached Titan, all passengers are safe.`);
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
// spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']);