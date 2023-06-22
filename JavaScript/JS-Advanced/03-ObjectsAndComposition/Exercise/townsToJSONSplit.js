function townsToJSON(dataArray) {
 
    let columnData = dataArray.shift();
    let resultArray = [];
 
    for (let townData of dataArray) {
 
        let currentArray = townData.split('|');
        let [_, town, latitude, longitude] = currentArray;
        town = town.trim();
        latitude = latitude.trim();
        longitude = longitude.trim();
 
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
 
        let currentObject = {
 
            Town: town,
            Latitude: latitude,
            Longitude: longitude,
        }
 
        resultArray.push(currentObject);
    }
 
    let result = JSON.stringify(resultArray);
 
    console.log(result);
}
 
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
// townsToJSON(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']);