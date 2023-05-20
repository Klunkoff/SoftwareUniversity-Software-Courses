function manOWar(manOWarArray) {

    let pirateShipArray = manOWarArray.shift().split('>').map(Number);
    let warShipArray = manOWarArray.shift().split('>').map(Number);
    let maxSectionHealth = Number(manOWarArray.shift());
    let commandArray = manOWarArray.slice();

    let isLost = false;
    let isWin = false;

    let index = 0;
    let command = commandArray[index];
    index++;

    while (command !== 'Retire') {

        let currentCommandArray = command.split(' ');
        let currentCommand = currentCommandArray.shift();

        if (currentCommand === 'Fire') {
            let currentIndex = Number(currentCommandArray.shift());
            let currentDamage = Number(currentCommandArray.shift());

            if (currentIndex >= 0 && currentIndex < warShipArray.length) {
                let sectionHealth = warShipArray.splice(currentIndex, 1);
                sectionHealth -= currentDamage;

                if (sectionHealth <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isWin = true;

                    break;

                } else {
                    warShipArray.splice(currentIndex, 0, sectionHealth);
                }
            }

        } else if (currentCommand === 'Defend') {
            let startIndex = Number(currentCommandArray.shift());
            let endIndex = Number(currentCommandArray.shift());
            let currentDamage = Number(currentCommandArray.shift());
            let isStartIndexInRange = (startIndex >= 0 && startIndex < pirateShipArray.length);
            let isEndIndexInRange = (endIndex >= 0 && endIndex < pirateShipArray.length);

            if (isStartIndexInRange && isEndIndexInRange) {
                let sectionNumber = (endIndex - startIndex) + 1;
                let damagedSections = pirateShipArray.splice(startIndex, sectionNumber);
                let mappedSections = damagedSections.map((a) => a - currentDamage);
                let filteredSections = mappedSections.filter((a) => a > 0);

                if (filteredSections.length < mappedSections.length) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    isLost = true;

                    break;

                } else {
                    pirateShipArray.splice(startIndex, 0, ...mappedSections);
                }
            }

        } else if (currentCommand === 'Repair') {
            let repairIndex = Number(currentCommandArray.shift());
            let repairHealth = Number(currentCommandArray.shift());

            if (repairIndex >= 0 && repairIndex < pirateShipArray.length) {
                let repairedSection = Number(pirateShipArray.splice(repairIndex, 1));
                repairedSection += repairHealth;

                if (repairedSection > maxSectionHealth) {
                    repairedSection = maxSectionHealth;
                }

                pirateShipArray.splice(repairIndex, 0, repairedSection);
            }

        } else if (currentCommand === 'Status') {
            let statusSection = maxSectionHealth * 0.2;
            let damagedSectionArray = pirateShipArray.filter((a) => a < statusSection);
            let sectionForRepairing = damagedSectionArray.length;

            console.log(`${sectionForRepairing} sections need repair.`);
        }

        command = commandArray[index];
        index++;
    }

    if (!isLost && !isWin) {
        let pirateShipSum = 0;
        let warShipSum = 0;

        for (let element of pirateShipArray) {
            pirateShipSum += element;
        }

        for (let element of warShipArray) {
            warShipSum += element;
        }

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }
}

// manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"]);
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);