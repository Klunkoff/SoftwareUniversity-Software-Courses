function solve(input) {

    let index = 0;
    let foodInKg = Number(input[index]);
    index++;

    let foodInGrams = foodInKg * 1000;
    let entryData = input[index];
    index++;

    while (entryData !== 'Adopted') {

        let countFood = Number(entryData);
        foodInGrams -= countFood;

        entryData = input[index];
        index++;
    }

    if (foodInGrams >= 0) {

        console.log(`Food is enough! Leftovers: ${foodInGrams} grams.`);

    } else {
        
        let result = Math.abs(foodInGrams);
        console.log(`Food is not enough. You need ${result} grams more.`);
    }
}

// solve(["4","130","345","400","180","230","120","Adopted"]);
// solve(["3","1000","1000","1000","Adopted"]);
solve(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);