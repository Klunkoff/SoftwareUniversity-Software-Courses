function houseParty(guestsString) {
 
    let partyString = [];
 
    for (let element of guestsString) {
 
        let countArray = element.split(' ');
 
        if (countArray.length < 4) {
 
            if (!partyString.includes(countArray[0])) {
                partyString.push(countArray[0]);
 
            } else {
                console.log(`${countArray[0]} is already in the list!`);
            }
 
        } else {
 
            if (!partyString.includes(countArray[0])) {
                console.log(`${countArray[0]} is not in the list!`);
 
            } else {
                let nameIndex = partyString.indexOf(countArray[0]);
                partyString.splice(nameIndex, 1);
            }
        }
    }
 
    console.log(partyString.join('\n'));
}
 
// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']);
 
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);