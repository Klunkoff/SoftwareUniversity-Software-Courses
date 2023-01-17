function englishNameOfTheLastDigit(number) {

    let numberAsString = number.toString();
    let lastNumber = numberAsString[numberAsString.length - 1];
    let array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let result = array[lastNumber];
    console.log(result);

}

englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);