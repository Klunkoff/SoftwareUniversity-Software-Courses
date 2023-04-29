function serializeString(stringArray) {

    let string = stringArray.shift();
    let checkedCharsArray = [];

    for (let i = 0; i < string.length; i++) {

        let resultArray = [];
        let currentChar = string[i];

        for (let j = i; j < string.length; j++) {

            let searchedChar = string[j];

            if (currentChar == searchedChar) {
                resultArray.push(j);
            }
        }

        if (!checkedCharsArray.includes(currentChar)) {
            checkedCharsArray.push(currentChar);
            console.log(`${currentChar}:${resultArray.join('/')}`);
        }
    }
}

// serializeString(["abababa"]);
 serializeString(["avjavamsdmcalsdm"]);