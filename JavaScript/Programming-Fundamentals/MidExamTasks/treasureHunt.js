function treasureHunt(treasureHuntArray) {

    let chestArray = treasureHuntArray.shift().split('|');
    let commandArray = treasureHuntArray.slice();

    let index = 0;
    let command = commandArray[index];
    index++;

    while (command !== 'Yohoho!') {

        let currentCommandArray = command.split(' ');
        let currentCommand = currentCommandArray.shift();

        switch (currentCommand) {

            case 'Loot':

                for (let element of currentCommandArray) {

                    if (!chestArray.includes(element)) {
                        chestArray.unshift(element);
                    }
                }

                break;

            case 'Drop':

                let currentIndex = Number(currentCommandArray.shift());

                if (currentIndex >= 0 && currentIndex < chestArray.length) {
                    let droppedItem = chestArray.splice(currentIndex, 1);
                    chestArray.push(droppedItem);
                }

                break;

            case 'Steal':

                let stealCount = Number(currentCommandArray.shift());

                if (stealCount < chestArray.length) {
                    let stealIndex = chestArray.length - stealCount;
                    let stealArray = chestArray.splice(stealIndex, stealCount);

                    console.log(stealArray.join(', '));

                } else {
                    console.log(chestArray.join(', '));
                    chestArray = [];
                }

                break;
        }

        command = commandArray[index];
        index++;
    }

    if (chestArray.length > 0) {
        let treasureSum = 0;

        for (let element of chestArray) {
            treasureSum += element.length;
        }

        let result = treasureSum / chestArray.length;

        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);

    } else {
        console.log(`Failed treasure hunt.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
// treasureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);