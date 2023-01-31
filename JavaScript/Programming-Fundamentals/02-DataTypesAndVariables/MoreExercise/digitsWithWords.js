function digitsWithWords(numberAsString) {

    let arrayOfNumbersAsString = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine'];

    for (i = 0; i < arrayOfNumbersAsString.length; i++) {

        let result = arrayOfNumbersAsString[i];

        if (result == numberAsString) {

            console.log(i);

            break;
        }
    }
}

digitsWithWords('one');
digitsWithWords('nine');
digitsWithWords('four');