function solve(input) {
 
    let days = Number(input[0]);
    let foodInKG = Number(input[1]);
    let foodForDogInKg = Number(input[2]);
    let foodForCatInKG = Number(input[3]);
    let foodForTurtleInGR = Number(input[4]);
 
    let foodForTurtleInKG = foodForTurtleInGR / 1000;
    let allEatenFood = days * (foodForDogInKg + foodForCatInKG + foodForTurtleInKG);
    let result = Math.abs(foodInKG - allEatenFood);
 
    if (allEatenFood > foodInKG) {
 
        console.log(`${Math.ceil(result)} more kilos of food are needed.`);
 
    } else {
 
        console.log(`${Math.floor(result)} kilos of food left.`);
    }
}
 
solve(['2', '10', '1', '1', '1200']);
solve(['5', '10', '2.1', '0.8', '321']);