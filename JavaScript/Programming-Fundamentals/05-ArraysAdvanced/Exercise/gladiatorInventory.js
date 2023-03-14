function gladiatorInventory(array) {

    let inventoryArray = array.shift().split(' ');
    let commandArray = array.slice();

    while (commandArray.length !== 0) {

        let currentArray = commandArray.shift().split(' ');
        let currentCommand = currentArray[0];
        let currentEquipment = currentArray[1];

        switch (currentCommand) {

            case 'Buy':

                if (!inventoryArray.includes(currentEquipment)) {
                    inventoryArray.push(currentEquipment);
                }

                break;

            case 'Trash':

                if (inventoryArray.includes(currentEquipment)) {
                    let deletedEquipmentIndex = inventoryArray.indexOf(currentEquipment);
                    inventoryArray.splice(deletedEquipmentIndex, 1);
                }

                break;

            case 'Repair':

                if (inventoryArray.includes(currentEquipment)) {
                    let repairedEquipmentIndex = inventoryArray.indexOf(currentEquipment);
                    let repairedEquipment = inventoryArray.splice(repairedEquipmentIndex, 1);
                    inventoryArray.push(repairedEquipment);
                }

                break;

            case 'Upgrade':

                let upgradeArray = currentEquipment.split('-');
                let equipmentToUpgrade = upgradeArray[0];
                let upgrade = upgradeArray[1];

                if (inventoryArray.includes(equipmentToUpgrade)) {
                    let equipmentToUpgradeIndex = inventoryArray.indexOf(equipmentToUpgrade);
                    inventoryArray.splice(equipmentToUpgradeIndex + 1, 0, `${equipmentToUpgrade}:${upgrade}`);
                }

                break;
        }
    }

    console.log(inventoryArray.join(' '));
}

// gladiatorInventory(['SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);