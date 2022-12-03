function solve(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);

    let totalEatenFood = 0;
    let eatenBiscuits = 0;
    let foodDog = 0;
    let foodCat = 0;
    let dogIndex = 2;
    let catIndex = 3;

    for (let i = 1; i <= days; i++) {

        let dogCount = Number(input[dogIndex]);
        dogIndex += 2;
        let catCount = Number(input[catIndex]);
        catIndex += 2;

        let dayEatenFood = dogCount + catCount;

        if (i % 3 === 0) {

            eatenBiscuits += dayEatenFood * 0.1;
        }

        foodDog += dogCount;
        foodCat += catCount;
        totalEatenFood = foodDog + foodCat;
    }

    let percentOfAllEatenFood = (totalEatenFood / food) * 100;
    let percentOfAllDogEatenFood = ((totalEatenFood - foodCat) / totalEatenFood) * 100;
    let percentOfAllCatEatenFood = ((totalEatenFood - foodDog) / totalEatenFood) * 100;
    eatenBiscuits = Math.round(eatenBiscuits);

    console.log(`Total eaten biscuits: ${eatenBiscuits}gr.`);
    console.log(`${percentOfAllEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentOfAllDogEatenFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentOfAllCatEatenFood.toFixed(2)}% eaten from the cat.`);
}

solve(["3", "1000", "300", "20", "100", "30", "110", "40"]);
//solve (["3","500","100","30","110","25","120","35"]);