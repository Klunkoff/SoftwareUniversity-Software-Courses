function convertToJSON(name, lastName, hairColor) {

    let object = {

        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }

    let objectToString = JSON.stringify(object);

    console.log(objectToString);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');