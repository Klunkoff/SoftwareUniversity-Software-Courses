function sortNumbers(num1, num2, num3) {

    if (num1 > num2 && num1 > num3 || num1 >= num2 && num1 >= num3) {
        console.log(num1);

        if (num2 >= num3) {
            console.log(num2);
            console.log(num3);
        } else {
            console.log(num2);
            console.log(num3);
        }

        return;
    }

    if (num2 > num1 && num2 > num3 || num2 >= num1 && num2 >= num3) {
        console.log(num2);

        if (num1 >= num3) {
            console.log(num1);
            console.log(num3);

        } else {
            console.log(num3);
            console.log(num1);
        }

        return;
    }

    if (num3 > num1 && num3 > num2 || num3 >= num1 && num3 >= num2) {
        console.log(num3);

        if (num2 >= num1) {
            console.log(num2);
            console.log(num1);
            
        } else {
            console.log(num1);
            console.log(num2);
        }

        return;
    }
}

// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(3, 2, 2);
sortNumbers(2, 3, 3);
// sortNumbers(0, 0, 2);