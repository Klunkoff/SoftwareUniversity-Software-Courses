function cars(inputData) {

    let objectsCollection = {};

    let commandObject = {
        create,
        set,
        CreateWithInherits,
        print,
    };

    commandDispatcher(inputData);

    function commandDispatcher(inputData) {

        inputData.forEach(element => {

            let [command, name, parameter1, parameter2] = element.split(' ');

            if (parameter1 == 'inherit') {
                commandObject.CreateWithInherits(name, parameter2);

            } else {
                let dispathcher = commandObject[command];
                dispathcher(name, parameter1, parameter2);
            }
        });
    }

    function create(name) {
        objectsCollection[name] = {};
    }

    function set(name, key, value) {
        objectsCollection[name][key] = value;
    }

    function CreateWithInherits(name, parentName) {
        objectsCollection[name] = Object.create(objectsCollection[parentName]);
    }

    function print(name) {

        let result = [];

        for (let key in objectsCollection[name]) {
            result.push(`${key}:${objectsCollection[name][key]}`);
        }

        console.log(result.join(','));
    }
}

// cars(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']);

cars(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'])