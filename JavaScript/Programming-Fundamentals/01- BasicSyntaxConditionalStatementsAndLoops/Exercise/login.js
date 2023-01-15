function login(input) {

    let index = 0;
    let username = input[index];
    index++;

    let password = '';
    let countIncorrectData = 0;
    let isCounterData4 = false;

    for (let i = username.length - 1; i >= 0; i--) {

        password += username[i];
    }

    let entryData = input[index];
    index++;

    while (entryData !== password) {

        countIncorrectData++;

        if (countIncorrectData === 4) {

            isCounterData4 = true;

            break;

        } else {

            console.log(`Incorrect password. Try again.`);
        }

        entryData = input[index];
        index++;
    }

    if (isCounterData4) {
        console.log(`User ${username} blocked!`);

    } else {
        console.log(`User ${username} logged in.`);
    }
}

// login(['Acer','login','go','let me in','recA']);
// login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);