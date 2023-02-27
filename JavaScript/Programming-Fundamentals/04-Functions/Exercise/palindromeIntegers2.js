function palindromeIntegers(originalArray) {

    for (let countNum of originalArray) {

        let number = String(countNum).split('').reverse().join('');

        if (countNum == number) {
            console.log(`true`);

        } else {
            console.log(`false`);
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32,2,232,1010]);