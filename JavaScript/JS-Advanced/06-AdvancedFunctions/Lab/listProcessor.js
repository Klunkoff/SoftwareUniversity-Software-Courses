function listProcessor(dataArray) {

    let resultArray = [];

    let commandObject = {
        add: (x) => resultArray.push(x),
        remove: (x) => resultArray = resultArray.filter((y) => x != y),
        print: () => console.log(resultArray.join(',')),
    }

    for (let data of dataArray) {

        let currentCommand;

        if (data == 'print') {
            currentCommand = commandObject[data];
            currentCommand();

        } else {
            let [command, string] = data.split(' ');
            currentCommand = commandObject[command];
            currentCommand(string);
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);