function commonElements(firstArray, secondArray){

    for (let searshElement of firstArray) {
        
        if (secondArray.includes(searshElement)){

            console.log(searshElement);
        }
    }
}

// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);