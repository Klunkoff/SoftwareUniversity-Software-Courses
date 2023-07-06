function focused() {

    let allElementInput = document.querySelectorAll('input');

    for (let inputElement of allElementInput) {

        inputElement.addEventListener('focus', addFocus);
        inputElement.addEventListener('blur', removeFocus);
    }

    function addFocus(event) {

        event.target.parentNode.classList.add('focused');
    }

    function removeFocus(event) {

        event.target.parentNode.classList.remove('focused');
    }
}