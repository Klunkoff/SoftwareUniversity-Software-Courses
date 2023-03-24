function convertToObject(stringJSON) {

    let object = JSON.parse(stringJSON);
    let keys = Object.keys(object);

    for (let key of keys) {

        let value = object[key];

        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');