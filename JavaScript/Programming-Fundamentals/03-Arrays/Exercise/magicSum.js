function magicSum(array, number) {

    for (let i = 0; i < array.length; i++) {

        let firstNumber = array[i];

        for (let j = i; j < array.length; j++) {

            let secondNumber = array[j]
            let result = firstNumber + secondNumber;

            if (result == number) {

                if (i == j) {
                    continue;

                } else {
                    console.log(`${firstNumber} ${secondNumber}`);
                }
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
magicSum([3, 3], 6);
// magicSum([-5, -5], -10);
// magicSum([1, 7, 1, 7], 8);