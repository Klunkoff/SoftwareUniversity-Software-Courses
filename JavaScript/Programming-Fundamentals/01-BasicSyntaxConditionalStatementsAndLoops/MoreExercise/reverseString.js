function reverseString(input) {

    let reverseString = '';

    for (let i = input.length - 1; i >= 0; i--) {

        reverseString += input[i];
    }

    console.log(reverseString);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('12345');