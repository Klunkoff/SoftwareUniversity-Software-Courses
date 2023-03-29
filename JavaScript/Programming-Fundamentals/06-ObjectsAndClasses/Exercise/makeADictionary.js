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
 
    let allObjectsInArray = [];
 
    for (let key in allObjectsInObject) {
 
        allObjectsInArray.push({ [key]: allObjectsInObject[key] });
    }
 
    let sortedObjectsInArray = allObjectsInArray.sort((a, b) => {
 
        if (String(Object.keys(a)) > String(Object.keys(b))) {
 
            return 1;
        }
 
        if (String(Object.keys(a)) < String(Object.keys(b))) {
 
            return -1;
        }
    });
 
    for (let element of sortedObjectsInArray) {
 
        let key = String(Object.keys(element));
        let value = element[key];
 
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}
 
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);