function addressBookWithMap(dataArray) {

    let addressBookMap = new Map();

    for (let element of dataArray) {

        let [currentName, currentAddress] = element.split(':');
        addressBookMap.set(currentName, currentAddress);
    }

    let sortedArrayOfkeys = Array.from(addressBookMap.keys()).sort((a, b) => a.localeCompare(b));

    for (let key of sortedArrayOfkeys) {

        let value = addressBookMap.get(key)
        console.log(`${key} -> ${value}`);
    }
}

// addressBookWithMap(['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']);
addressBookWithMap(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);