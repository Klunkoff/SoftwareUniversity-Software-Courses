function rotateArray(array) {

    let rotationNum = Number(array.pop());

    for (let i = 0; i < rotationNum; i++) {

        let elementToMove = array.pop();
        array.unshift(elementToMove);
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);