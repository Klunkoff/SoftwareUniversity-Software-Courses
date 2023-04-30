function treasureFinder(inputArray) {

    let keyArray = inputArray.shift().split(' ').map(Number);
    let encryptedMessage = inputArray.shift();
    let indexKey = 0;

    while (encryptedMessage !== 'find') {

        let decryptedMessage = '';

        for (let char of encryptedMessage) {

            let currentKey = keyArray[indexKey];
            indexKey++;

            let currentCharNum = char.charCodeAt(0);
            currentCharNum -= currentKey;
            let decryptedChar = String.fromCharCode(currentCharNum);
            decryptedMessage += decryptedChar;

            if (indexKey == keyArray.length) {
                indexKey = 0;
            }
        }

        let firstTypeIndex = decryptedMessage.indexOf('&');
        let lastTypeIndex = decryptedMessage.lastIndexOf('&');
        let type = decryptedMessage.substring(firstTypeIndex + 1, lastTypeIndex);

        let firstCoordinatesIndex = decryptedMessage.indexOf('<');
        let lastCoordinatesIndex = decryptedMessage.indexOf('>');
        let coordinates = decryptedMessage.substring(firstCoordinatesIndex + 1, lastCoordinatesIndex);

        console.log(`Found ${type} at ${coordinates}`);

        encryptedMessage = inputArray.shift();
        indexKey = 0;
    }
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);