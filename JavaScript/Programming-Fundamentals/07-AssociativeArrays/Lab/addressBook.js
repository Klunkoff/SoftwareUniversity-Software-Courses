function addressBook(dataArray) {

    let addressBookObject = {};

    for (let element of dataArray) {

        let [currentName, currentAddress] = element.split(':');
        addressBookObject[currentName] = currentAddress;
    }

    let sortedArray = Object.entries(addressBookObject).sort((a, b) => (a[0].localeCompare(b[0])));

    for (let array of sortedArray) {

        let [name, address] = array;
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
// addressBook(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd']);