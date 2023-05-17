function squareOfStars(number) {

    if (!number) {
        number = 5;
    }

    for (let i = 0; i < number; i++) {
        console.log('* '.repeat(number));
    }
}

// squareOfStars(1);
// squareOfStars(2);
// squareOfStars(5);
squareOfStars();