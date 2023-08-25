function extensibleObject() {

    let newObject = {

        extend : function (template) {

            let objPrototypeRef = Object.getPrototypeOf(template); // or this!
            let templateEntries = Object.entries(template);

            for (let [key, value] of templateEntries){

                if (typeof value == 'function') {
                    objPrototypeRef[key] = value;

                } else {
                    newObject[key] = value;
                }
            }
        }
    }

    return newObject;
}

const myObj = extensibleObject();

const template = {
    
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

myObj.extend(template);
console.log(myObj);
