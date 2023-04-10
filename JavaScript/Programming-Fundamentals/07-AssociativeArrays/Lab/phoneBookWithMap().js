function phoneBookWithMap(arrayInfo) {

    let mapPhoneBook = new Map();

    for (let element of arrayInfo) {

        let [currentName, currentPhoneNumber] = element.split(' ');
        mapPhoneBook.set(currentName, currentPhoneNumber)
    }

    for (let [name, phoneNumber] of mapPhoneBook) {

        console.log(`${name} -> ${phoneNumber}`);
    }
}

phoneBookWithMap(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
// phoneBookWithMap(['George 0552554',
//     'Peter 087587',
//     'George 0453112',
//     'Bill 0845344']);