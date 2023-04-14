function legendaryFarming(stringOfElements) {
 
    let keyMaterials = {
 
        shards: 0,
        fragments: 0,
        motes: 0,
    }
 
    let junk = {};
 
    let arrayOfElements = stringOfElements.split(' ');
 
    for (let i = 0; i < arrayOfElements.length; i += 2) {
 
        let currentQuantity = Number(arrayOfElements[i]);
        let currentMaterial = arrayOfElements[i + 1].toLowerCase();
 
        if (keyMaterials.hasOwnProperty(currentMaterial)) {
            keyMaterials[currentMaterial] += currentQuantity;
 
            if (keyMaterials[currentMaterial] >= 250) {
                keyMaterials[currentMaterial] -= 250;
 
                switch (currentMaterial) {
 
                    case 'shards': console.log(`Shadowmourne obtained!`); break;
                    case 'fragments': console.log(`Valanyr obtained!`); break;
                    case 'motes': console.log(`Dragonwrath obtained!`); break;
                }
 
                break;
            }
 
        } else {
 
            if (!junk.hasOwnProperty(currentMaterial)) {
                junk[currentMaterial] = currentQuantity;
 
            } else {
                junk[currentMaterial] += currentQuantity;
            }
        }
    }
 
    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => {
 
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
 
    for (let entry of sortedKeyMaterials) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
 
    let sortedJunk = Object.keys(junk).sort((a, b) => a.localeCompare(b));
 
    for (let key of sortedJunk) {
        console.log(`${key}: ${junk[key]}`);
    }
}
 
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');