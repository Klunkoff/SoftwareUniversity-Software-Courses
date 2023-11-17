function validate() {

    let buttonSubmit = document.getElementById('submit');
    buttonSubmit.addEventListener('click', checkForm);

    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirm-password');

    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', company);

    let companyNumberInput = document.getElementById('companyNumber');
    let companyInfo = document.getElementById('companyInfo');

    let validInfo = document.getElementById('valid');

    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    let emailPattern = /^.*@.*\..*/;
    let passwordPattern = /^[\w]{5,15}$/;

    let isValid = true;
    let isChecked = false;

    function checkForm(event) {

        event.preventDefault();

        if (!usernamePattern.test(usernameInput.value)) {
            usernameInput.style.borderColor = 'red';
            isValid = false;
        }

        if (!emailPattern.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }

        if (!passwordPattern.test(passwordInput.value)) {
            passwordInput.style.borderColor = 'red';
            isValid = false;
        }

        if (!passwordPattern.test(confirmPasswordInput.value)) {
            confirmPasswordInput.style.borderColor = 'red';
            isValid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            isValid = false;
        }

        if (isChecked) {

            let companyNumber = Number(companyNumberInput.value);

            if (companyNumber < 1000 || companyNumber > 9999) {
                companyNumberInput.style.borderColor = 'red';
                isValid = false;
            }
        }

        if (isValid) {
            validInfo.style.display = 'block';
        }
    }

    function company() {
        companyInfo.style.display = 'block';
        isChecked = true;
    }
}
