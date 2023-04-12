function aMinerTask(resourceArray) {

    let yieldObject = {};

    for (let i = 0; i < resourceArray.length; i += 2) {

        let currentResource = resourceArray[i];
        let currentQuantity = Number(resourceArray[i + 1]);

        if (!yieldObject.hasOwnProperty(currentResource)) {
            yieldObject[currentResource] = currentQuantity;

        } else {
            yieldObject[currentResource] += currentQuantity;
        }
    }

    for (resource in yieldObject) {
        console.log(`${resource} -> ${yieldObject[resource]}`);
    }
}

// aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);