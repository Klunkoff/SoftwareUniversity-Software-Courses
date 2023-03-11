function listOfProducts(arrayOfStrings) {

    let sortedArray = arrayOfStrings.sort();

    for (let i = 1; i <= sortedArray.length; i++) {
        let countString = sortedArray[i - 1];

        console.log(`${i}.${countString}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
// listOfProducts(['Watermelon', 'Banana', 'Apples']);
// listOfProducts(['Watermelon']);