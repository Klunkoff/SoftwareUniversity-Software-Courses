function secretChat(chatArray) {

    let secretMessage = chatArray.shift();
    let command = chatArray.shift();

    while (command !== 'Reveal') {

        let currentCommandArray = command.split(':|:');
        let currentCommand = currentCommandArray[0];
        let firstPart = '';
        let secondPart = '';

        switch (currentCommand) {

            case 'InsertSpace':

                let spaceIndex = Number(currentCommandArray[1]);
                firstPart = secretMessage.substring(0, spaceIndex);
                secondPart = secretMessage.substring(spaceIndex);
                secretMessage = firstPart + ' ' + secondPart;

                console.log(secretMessage);

                break;

            case 'Reverse':

                let reverseSubstring = currentCommandArray[1];

                if (secretMessage.includes(reverseSubstring)) {

                    let startIndex = secretMessage.indexOf(reverseSubstring);
                    let endIndex = startIndex + reverseSubstring.length;
                    reverseSubstring = reverseSubstring.split('').reverse().join('');
                    firstPart = secretMessage.substring(0, startIndex);
                    secondPart = secretMessage.substring(endIndex) 
                    secretMessage = firstPart + secondPart + reverseSubstring;

                    console.log(secretMessage);

                } else {
                    console.log(`error`);
                }

                break;

            case 'ChangeAll':

                let searchedSubstring = currentCommandArray[1];
                let replacement = currentCommandArray[2];
                secretMessage = secretMessage.split(searchedSubstring).join(replacement);

                console.log(secretMessage);

                break;
        }

        command = chatArray.shift();
    }

    console.log(`You have a new text message: ${secretMessage}`);
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);