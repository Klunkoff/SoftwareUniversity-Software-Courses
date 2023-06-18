function calorieObject(foodArray) {

    const foodObject = {};

    for (let i = 0; i < foodArray.length; i += 2) {

        let foodType = foodArray[i];
        let foodCalories = Number(foodArray[i + 1]);

        foodObject[foodType] = foodCalories;
    }

    console.log(foodObject);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);