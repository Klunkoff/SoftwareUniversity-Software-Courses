function sunglasses(number) {

    let firstAndLastRow = '*'.repeat(number * 2) + ' '.repeat(number) + '*'.repeat(number * 2);

    console.log(firstAndLastRow);

    for (let i = 1; i < number - 1; i++) {

        let firstAndLastPart = '*' + '/'.repeat((number * 2) - 2) + '*';
        let middlePart = '';

        if (i == Math.floor((number - 1) / 2)) {

            middlePart = '|'.repeat(number);

        } else {

            middlePart = ' '.repeat(number);
        }

        console.log(firstAndLastPart + middlePart + firstAndLastPart);
    }

    console.log(firstAndLastRow);
}

// sunglasses(3);
sunglasses(5);
// sunglasses(4);
// sunglasses(14);