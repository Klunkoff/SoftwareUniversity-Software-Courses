function partyTime(guestListArray) {
 
    let invitedList = guestListArray.splice(0, guestListArray.indexOf('PARTY'));
    guestListArray.splice(0, 1);
 
    let listVIP = [];
    let listRegular = [];
 
    for (let currentGuest of invitedList) {
 
        let firstChar = currentGuest[0];
        let isVIP = firstChar.charCodeAt() >= 48 && firstChar.charCodeAt() <= 57;
 
        if (isVIP) {
            listVIP.push(currentGuest);
 
        } else {
            listRegular.push(currentGuest);
        }
    }
 
    for (let guest of guestListArray) {
 
        if (listVIP.includes(guest)) {
            let index = listVIP.indexOf(guest);
            listVIP.splice(index, 1);
        }
 
        if (listRegular.includes(guest)) {
            let index = listRegular.indexOf(guest);
            listRegular.splice(index, 1);
        }
    }
 
    console.log(listRegular.length + listVIP.length);
 
    for (let guestVIP of listVIP) {
        console.log(guestVIP);
    }
 
    for (let guestRegular of listRegular) {
        console.log(guestRegular);
    }
}
 
 
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
// partyTime(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]);