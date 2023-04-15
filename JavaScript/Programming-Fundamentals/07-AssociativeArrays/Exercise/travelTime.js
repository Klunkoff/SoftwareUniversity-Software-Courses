function travelTime(travelDestinationArray) {
 
    let travelPlan = {};
 
    for (destination of travelDestinationArray) {
 
        let [currentDestination, currentTown, currentCost] = destination.split(' > ');
        currentCost = Number(currentCost);
 
        if (!travelPlan.hasOwnProperty(currentDestination)) {
            travelPlan[currentDestination] = { [currentTown]: currentCost };
        }
 
        if (travelPlan[currentDestination].hasOwnProperty(currentTown)) {
 
            let currentPrice = travelPlan[currentDestination][currentTown];
 
            if (currentCost < currentPrice) {
                travelPlan[currentDestination][currentTown] = currentCost;
            }
 
        } else {
            travelPlan[currentDestination][currentTown] = currentCost;
        }
    }
 
    let entriesSortedByCountry = Object.entries(travelPlan).sort((a, b) => a[0].localeCompare(b[0]));
 
    for (let country of entriesSortedByCountry) {
 
        let result = country[0] + ' -> ';
        let townsSortedByPrice = Object.entries(country[1]).sort((a, b) => a[1] - b[1]);
 
        for (let town of townsSortedByPrice) {
 
            let [currentTown, currentPrice] = town;
            result += currentTown + ' -> ' + currentPrice + ' ';
        }
 
        console.log(result);
    }
}
 
// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200",
// ]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);