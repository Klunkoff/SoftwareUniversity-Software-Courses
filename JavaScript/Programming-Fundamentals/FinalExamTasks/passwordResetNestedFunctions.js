function passwordReset(inputData) {

    let password = inputData.shift();
    let command = inputData.shift();

    let operationObject = {

        TakeOdd,
        Cut,
        Substitute,
    };

    while (command !== 'Done') {

        let commandArray = command.split(' ');
        let currentCommand = commandArray[0];
        let firstParameter = commandArray[1];
        let secondParameter = commandArray[2];

        let operation = operationObject[currentCommand];
        password = operation(password, firstParameter, secondParameter);

        command = inputData.shift();
    }

    console.log(`Your password is: ${password}`);

    function TakeOdd(password) {

        let rawPassword = '';

        for (let i = 0; i < password.length; i++) {

            if (i % 2 !== 0) {
                rawPassword += password[i];
            }
        }

        password = rawPassword;
        console.log(password);
        return password;
    }

    function Cut(password, firstIndex, length) {

        firstIndex = Number(firstIndex);
        length = Number(length);
        let secondIndex = firstIndex + length;
        let firstPart = password.substring(0, firstIndex);
        let secondPart = password.substring(secondIndex);
        password = firstPart + secondPart;

        console.log(password);
        return password;
    }

    function Substitute(password, substring, substitute) {

        if (password.includes(substring)) {
            password = password.split(substring).join(substitute);

            console.log(password);
            return password;

        } else {
            console.log(`Nothing to replace!`);
            return password;
        }
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"]);