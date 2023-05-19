function heartDelivery(array) {
 
    let cupidMoveArray = array.slice();
    let neighborhoodArray = cupidMoveArray.shift().split('@').map(Number);
 
    let index = 0;
    let commands = cupidMoveArray[index];
    index++;
 
    let lastCupidIndex = 0;
 
    while (commands != 'Love!') {
 
        let commandArray = commands.split(' ');
        let jumpLength = Number(commandArray[1]);
 
        lastCupidIndex += jumpLength;
 
        if (lastCupidIndex < neighborhoodArray.length) {
            let houseHearts = neighborhoodArray[lastCupidIndex];
 
            if (houseHearts > 0) {
                houseHearts -= 2;
 
                if (houseHearts == 0) {
                    console.log(`Place ${lastCupidIndex} has Valentine's day.`);
                }
 
            } else {
                console.log(`Place ${lastCupidIndex} already had Valentine's day.`);
            }
 
            neighborhoodArray.splice(lastCupidIndex, 1, houseHearts);
 
        } else {
            lastCupidIndex = 0;
            let houseHearts = neighborhoodArray[lastCupidIndex];
 
            if (houseHearts > 0) {
                houseHearts -= 2;
 
                if (houseHearts == 0) {
                    console.log(`Place ${lastCupidIndex} has Valentine's day.`);
                }
 
            } else {
                console.log(`Place ${lastCupidIndex} already had Valentine's day.`);
            }
 
            neighborhoodArray.splice(lastCupidIndex, 1, houseHearts);
        }
 
        commands = cupidMoveArray[index];
        index++;
    }
 
    console.log(`Cupid's last position was ${lastCupidIndex}.`);
 
    let valentineDayhouseArray = neighborhoodArray.filter((a) => a == 0);
    let housesWithoutValentineDay = neighborhoodArray.length - valentineDayhouseArray.length;
 
    if (housesWithoutValentineDay == 0) {
        console.log(`Mission was successful.`);
 
    } else {
        console.log(`Cupid has failed ${housesWithoutValentineDay} places.`);
    }
}
 
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);