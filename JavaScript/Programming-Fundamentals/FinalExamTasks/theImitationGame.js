function theImitationGame(inputData) {

    let message = inputData.shift();
    let command = inputData.shift();

    while (command !== 'Decode') {

        let currentCommandArray = command.split('|');
        let currentCommand = currentCommandArray[0];
        let firstPart = '';
        let secondPart = '';

        switch (currentCommand) {

            case 'Move':

                let moveNumber = Number(currentCommandArray[1]);
                firstPart = message.substring(0, moveNumber);
                secondPart = message.substring(moveNumber);

                message = secondPart.concat(firstPart);

                break;

            case 'Insert':

                let insertIndex = Number(currentCommandArray[1]);
                let insertValue = currentCommandArray[2];
                firstPart = message.substring(0, insertIndex);
                secondPart = message.substring(insertIndex);
                message = firstPart + insertValue + secondPart;

                break;

            case 'ChangeAll':

                let substring = currentCommandArray[1];
                let replacement = currentCommandArray[2];

                message = message.split(substring).join(replacement);

                break;
        }

        command = inputData.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
// theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',]);