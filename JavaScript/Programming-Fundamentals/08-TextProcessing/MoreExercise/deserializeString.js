function deserializeString(inputArray) {

    let resultArray = [];
    let command = inputArray.shift();

    while (command !== 'end') {

        let currentArray = command.split(':');
        let currentChar = currentArray.shift();
        let indexArray = currentArray.shift().split('/').map(Number);

        for (index of indexArray) {
            resultArray[index] = currentChar;
        }

        command = inputArray.shift();
    }

    console.log(resultArray.join(''));
}

deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);