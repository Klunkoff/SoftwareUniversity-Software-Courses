function makeADictionary(arrayOfJSONStrings) {

    let allObjectsInObject = {};

    for (let JSONString of arrayOfJSONStrings) {

        let currentObject = JSON.parse(JSONString);
        let currentKey = String(Object.keys(currentObject));
        let currentValue = String(Object.values(currentObject));

        if (allObjectsInObject.hasOwnProperty(currentKey)) {
            delete allObjectsInObject[currentKey];
        }

        allObjectsInObject[currentKey] = currentValue;
    }

    let sortedArrayOfObjectEntries = Object.entries(allObjectsInObject).sort((a, b) => {

        return (a[0]).localeCompare(b[0]);
    });

    for (let entryArray of sortedArrayOfObjectEntries) {

        console.log(`Term: ${entryArray[0]} => Definition: ${entryArray[1]}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);