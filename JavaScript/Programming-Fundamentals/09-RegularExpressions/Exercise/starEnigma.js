function starEnigma(inputData) {
 
    const messageNumbers = Number(inputData.shift());
    const starPattern = /[star]/gi;
    let decryptedMessages = [];
 
    for (let i = 0; i < messageNumbers; i++) {
 
        let message = inputData[i];
        let currentDecryptedMessage = [];
        let starChars = message.match(starPattern);
        let countStarChars = 0;
 
        if (starChars) {
            countStarChars = starChars.length;
        }
 
        for (let char of message) {
 
            let asciiNumber = char.charCodeAt(0);
            let newChar = String.fromCharCode(asciiNumber - countStarChars);
            currentDecryptedMessage.push(newChar);
        }
 
        decryptedMessages.push(currentDecryptedMessage.join(''));
    }
 
    const battlePattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:([^@\-!:>|^0-9])*(?<population>[0-9]+)[^@\-!:>]*![^@\-!:>]*(?<type>[A|D])[^@\-!:>]*![^@\-!:>]*->([^@\-!:>|^0-9])*(?<soldiers>[0-9]+)/g;
    let attackedPlanets = [];
    let destroyedPlanets = [];
 
    for (let message of decryptedMessages) {
 
        let planetDescription = battlePattern.exec(message);
 
        if (planetDescription) {
 
            let planet = planetDescription.groups['planet'];
            let type = planetDescription.groups['type'];
 
            switch (type) {
 
                case 'A': attackedPlanets.push(planet); break;
                case 'D': destroyedPlanets.push(planet); break;
            }
 
            planetDescription = battlePattern.exec(message);
        }
    }
 
    let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));
 
    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);
 
    for (let attackedPlanet of sortedAttackedPlanets) {
        console.log(`-> ${attackedPlanet}`);
    }
 
    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
 
    for (let destroyedPlanet of sortedDestroyedPlanets) {
        console.log(`-> ${destroyedPlanet}`);
    }
}
 
starEnigma(['3', 'PQ@vldevvv123231111:30000!v!->20000',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);