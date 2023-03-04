function numberModification(number) {
 
    let newNumber = number.toString();
    let sumDigit = 0;
 
    for (let i = 0; i < newNumber.length; i++) {

        let digit = Number(newNumber[i]);
        sumDigit += digit;
 
        if ((sumDigit / newNumber.length) > 5) {
            console.log(newNumber);
 
            break;
 
        } else if ((sumDigit / newNumber.length) < 5 && i == newNumber.length - 1) {
            newNumber += 9;
        }
    }
}
 
// numberModification(101);
numberModification(5835);