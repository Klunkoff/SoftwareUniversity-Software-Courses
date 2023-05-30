function passwordReset(inputData) {

    let password = inputData.shift();
    let command = inputData.shift();

    while (command !== 'Done') {

        let commandArray = command.split(' ');
        let currentCommand = commandArray[0];

        switch (currentCommand) {

            case 'TakeOdd':

                let rawPassword = '';

                for (let i = 0; i < password.length; i++) {

                    if (i % 2 !== 0) {
                        rawPassword += password[i];
                    }
                }

                password = rawPassword;
                console.log(password);

                break;

            case 'Cut':

                let firstIndex = Number(currentCommand = commandArray[1]);
                let length = Number(currentCommand = commandArray[2]);
                let secondIndex = firstIndex + length;
                let firstPart = password.substring(0, firstIndex);
                let secondPart = password.substring(secondIndex);
                password = firstPart + secondPart;

                console.log(password);

                break;

            case 'Substitute':

                let substring = currentCommand = commandArray[1];
                let substitute = currentCommand = commandArray[2];

                if (password.includes(substring)) {

                    password = password.split(substring).join(substitute);

                    console.log(password);

                } else {

                    console.log(`Nothing to replace!`);
                }

                break;
        }

        command = inputData.shift();
    }

    console.log(`Your password is: ${password}`);
}

// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);