function solve(input) {
 
    let area = input[0];
    let grape = input[1];
    let neededWine = input[2];
    let workers = input[3];
 
    let areaForWine = area * 0.4;
    let producedGrape = areaForWine * grape;
    let producedWine = producedGrape / 2.5;
 
    let result = Math.abs(producedWine - neededWine);
    let wineForWorker = result / workers;
 
    if (producedWine < neededWine) {
 
        console.log(`It will be a tough winter! More ${Math.floor(result)} liters wine needed.`);
 
    } else {
 
        console.log(`Good harvest this year! Total wine: ${Math.floor(producedWine)} liters.`);
        console.log(`${Math.ceil(result)} liters left -> ${Math.ceil(wineForWorker)} liters per person.`);
    }
}
 
// solve([650, 2, 175, 3]);
solve([1020, 1.5, 425, 4]);