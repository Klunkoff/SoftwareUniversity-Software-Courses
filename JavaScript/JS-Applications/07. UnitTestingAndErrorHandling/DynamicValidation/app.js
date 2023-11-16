function validate() {

    let elementInput = document.getElementById('email');
    elementInput.addEventListener('change', validateEmail);

    let emailPattern = /\b[a-z]+@[a-z]+\.[a-z]+\b$/g;

    function validateEmail() {

        let matches = elementInput.value.match(emailPattern);
        elementInput.classList.remove('error');

        if (matches) {
            elementInput.value = '';

        } else {
            elementInput.classList.add('error');
        }
    }
}