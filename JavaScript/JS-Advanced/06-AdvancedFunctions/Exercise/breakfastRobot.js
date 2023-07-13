function solution() {

    let mainObject = {

        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function manager(inputData) {

        function restock(microelement, quantity) {

            mainObject[microelement] += quantity;
            return 'Success';
        }

        function prepare(recipe, quantity) {

            recipeObject = {

                apple,
                lemonade,
                burger,
                eggs,
                turkey,
            }

            let currentCommand = recipeObject[recipe];
            return currentCommand(quantity)

            function apple(quantity) {

                let appleRecipe = {

                    carbohydrate: 1 * quantity,
                    flavour: 2 * quantity,
                }

                for (let element in appleRecipe) {

                    if (mainObject[element] < appleRecipe[element]) {
                        return `Error: not enough ${element} in stock`;
                    }
                }

                for (let element in appleRecipe) {
                    mainObject[element] -= appleRecipe[element];
                }

                return 'Success';
            }

            function lemonade(quantity) {

                let lemonadeRecipe = {

                    carbohydrate: 10 * quantity,
                    flavour: 20 * quantity,
                }

                for (let element in lemonadeRecipe) {

                    if (mainObject[element] < lemonadeRecipe[element]) {
                        return `Error: not enough ${element} in stock`;
                    }
                }

                for (let element in lemonadeRecipe) {
                    mainObject[element] -= lemonadeRecipe[element];
                }

                return 'Success';
            }

            function burger(quantity) {

                let burgerRecipe = {

                    carbohydrate: 5 * quantity,
                    fat: 7 * quantity,
                    flavour: 3 * quantity,
                }

                for (let element in burgerRecipe) {

                    if (mainObject[element] < burgerRecipe[element]) {
                        return `Error: not enough ${element} in stock`;
                    }
                }

                for (let element in burgerRecipe) {
                    mainObject[element] -= burgerRecipe[element];
                }

                return 'Success';
            }

            function eggs(quantity) {

                let eggsRecipe = {

                    protein: 5 * quantity,
                    fat: 1 * quantity,
                    flavour: 1 * quantity,
                }

                for (let element in eggsRecipe) {

                    if (mainObject[element] < eggsRecipe[element]) {
                        return `Error: not enough ${element} in stock`;
                    }
                }

                for (let element in eggsRecipe) {
                    mainObject[element] -= eggsRecipe[element];
                }

                return 'Success';
            }

            function turkey(quantity) {

                let turkeyRecipe = {

                    protein: 10 * quantity,
                    carbohydrate: 10 * quantity,
                    fat: 10 * quantity,
                    flavour: 10 * quantity,
                }

                for (let element in turkeyRecipe) {

                    if (mainObject[element] < turkeyRecipe[element]) {
                        return `Error: not enough ${element} in stock`;
                    }
                }

                for (let element in turkeyRecipe) {
                    mainObject[element] -= turkeyRecipe[element];
                }

                return 'Success';
            }
        }

        function report() {
            return `protein=${mainObject.protein} carbohydrate=${mainObject.carbohydrate} fat=${mainObject.fat} flavour=${mainObject.flavour}`;
        }

        let [command, element, quantity] = inputData.split(' ');
        quantity = Number(quantity);

        let commandsObject = {

            report,
            restock,
            prepare,
        }

        return commandsObject[command](element, quantity);  
    }

    return manager;
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));