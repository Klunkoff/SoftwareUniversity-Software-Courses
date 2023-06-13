function addAndRemoveElements(commandArray) {

    let resultArray = [];

    for (let i = 1; i <= commandArray.length; i++) {

        if (commandArray[i - 1] == 'add') {
            resultArray.push(i);

        } else if (commandArray[i - 1] == 'remove') {
            resultArray.pop();
        }
    }

    if (resultArray.length == 0) {
        console.log(`Empty`);

    } else {
        console.log(resultArray.join('\n'));
    }
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveElements(['remove',
    'remove',
    'remove']);