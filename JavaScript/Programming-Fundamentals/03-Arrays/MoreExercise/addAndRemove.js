function addAndRemove(array) {

    let newArray = [];
    let countNumber = 0;

    for (let i = 0; i < array.length; i++) {

        countNumber++;
        let countWord = array[i];

        if (countWord == 'add') {
            newArray.push(countNumber);

        } else {
            newArray.pop();
        }
    }

    if (newArray.length < 1) {
        console.log(`Empty`);

    } else {
        let result = newArray.join(' ');
        console.log(result);
    }
}

// addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
addAndRemove(['add', 'add', 'remove', 'remove', 'add']);