function commonElements(firstArray, secondArray) {

    for (let elementsOfFirstArray of firstArray) {

        for (let elementsOfSecondArray of secondArray) {

            if (elementsOfFirstArray === elementsOfSecondArray) {

                console.log(elementsOfFirstArray);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']);