function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {

        let sum = 0;
        let num1 = i % 10;
        sum += num1;

        let num2 = parseInt(i / 10);
        sum += num2;

        if (sum == 5 || sum == 7 || sum == 11) {

            console.log(`${i} -> True`);

        } else {

            console.log(`${i} -> False`);
        }
    }
}

// specialNumbers(15);
specialNumbers(21);