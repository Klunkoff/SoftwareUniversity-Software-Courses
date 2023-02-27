function passwordValidator(password) {

    let countDigits = 0;
    let isSymbol = false;

    for (let i = 0; i < password.length; i++) {

        let countChar = (password[i]).charCodeAt();

        if (countChar >= 48 && countChar <= 57 || countChar >= 65 && countChar <= 90 || countChar >= 97 && countChar <= 122) {
            
        } else {
            isSymbol = true;
        }

        if (countChar >= 48 && countChar <= 57) {
            countDigits++;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (isSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (countDigits < 2) {
        console.log(`Password must have at least 2 digits`);
    }

    if (!isSymbol && countDigits >= 2 && password.length >= 6 && password.length <= 10) {
        console.log(`Password is valid`);
    }
}

passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');
