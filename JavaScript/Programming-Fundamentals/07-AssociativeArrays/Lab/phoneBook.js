function phoneBook(arrayInfo) {

    let objectBook = {};

    for (let element of arrayInfo) {

        let [currentName, currentPhoneNumber] = element.split(' ');
        objectBook[currentName] = currentPhoneNumber;
    }

    for (let name in objectBook) {

        console.log(`${name} -> ${objectBook[name]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
// phoneBook(['George 0552554',
//     'Peter 087587',
//     'George 0453112',
//     'Bill 0845344']);