function towns(dataArray) {

    for (let element of dataArray) {
        
        let elementArray = element.split(' | ');
        
        let currentTown = elementArray[0];
        let currentLatitude = (Number(elementArray[1])).toFixed(2);
        let currentLongitude = (Number(elementArray[2])).toFixed(2);
        
        let townObject = {
            
            town : currentTown,
            latitude : currentLatitude,
            longitude : currentLongitude,
        };

        console.log(townObject);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
// towns(['Plovdiv | 136.45 | 812.575']);