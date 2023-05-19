function inventory(array) {

    let commandArray = array.slice();
    let journalArray = commandArray.shift().split(', ');

    let index = 0;
    let command = commandArray[index];
    index++;

    while (command != 'Craft!') {

        let countCommandArray = command.split(' - ');
        let countCommand = countCommandArray[0];
        let countItems = countCommandArray[1];

        switch (countCommand) {

            case 'Collect':

                if (!journalArray.includes(countItems)) {
                    journalArray.push(countItems);
                }

                break;

            case 'Drop':

                if (journalArray.includes(countItems)) {
                    let itemIndex = journalArray.indexOf(countItems);
                    journalArray.splice(itemIndex, 1);
                }

                break;

            case 'Combine Items':

                let combinedItemArray = countItems.split(':');
                let oldItem = combinedItemArray[0];
                let newItem = combinedItemArray[1];

                if (journalArray.includes(oldItem)) {
                    let itemIndex = journalArray.indexOf(oldItem);
                    journalArray.splice(itemIndex + 1, 0, newItem);
                }

                break;

            case 'Renew':

                if (journalArray.includes(countItems)) {
                    let itemIndex = journalArray.indexOf(countItems);
                    let itemsToChange = journalArray.splice(itemIndex, 1);
                    journalArray.push(itemsToChange);
                }

                break;
        }

        command = commandArray[index];
        index++;
    }

    console.log(journalArray.join(', '));
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!']);