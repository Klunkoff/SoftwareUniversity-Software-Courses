function shopingList(stringArray) {
 
    let commandArray = stringArray.slice();
    let shoppingListArray = commandArray.shift().split('!');
 
    let index = 0;
    let command = commandArray[index];
    index++;
 
    while (command != 'Go Shopping!') {
 
        let countCommandArray = command.split(' ');
        let countCommand = countCommandArray[0];
        let item = countCommandArray[1];
        let newItem = countCommandArray[2];
 
        switch (countCommand) {
 
            case 'Urgent':
 
                if (!(shoppingListArray.includes(item))) {
                    shoppingListArray.unshift(item);
                }
 
                break;
 
            case 'Unnecessary':
 
                if (shoppingListArray.includes(item)) {
                    let shoppingListIndex = shoppingListArray.indexOf(item);
                    shoppingListArray.splice(shoppingListIndex, 1);
                }
 
                break;
 
            case 'Correct':
 
                if (shoppingListArray.includes(item)) {
                    let shoppingListIndex = shoppingListArray.indexOf(item);
                    shoppingListArray.splice(shoppingListIndex, 1, newItem);
                }
 
                break;
 
            case 'Rearrange':
 
                if (shoppingListArray.includes(item)) {
                    let shoppingListIndex = shoppingListArray.indexOf(item);
                    let itemToRearrange = shoppingListArray[shoppingListIndex];
                    shoppingListArray.splice(shoppingListIndex, 1);
                    shoppingListArray.push(itemToRearrange);
                }
 
                break;
        }
 
        command = commandArray[index];
        index++;
    }
 
    console.log(shoppingListArray.join(', '));
}
 
shopingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
// shopingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes",
//     "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);