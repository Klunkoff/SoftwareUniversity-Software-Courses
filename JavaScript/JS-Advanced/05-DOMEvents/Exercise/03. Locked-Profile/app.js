function lockedProfile() {

    let allButtons = Array.from(document.getElementsByTagName('button'));

    allButtons.forEach((button) => button.addEventListener('click', showMore));

    function showMore(event) {

        let hiddenInformation = event.target.previousElementSibling;
        let unlockValue = event.target.parentElement.children[4];
        let currentButton = event.target.parentElement.children[10];

        if (unlockValue.checked && currentButton.textContent == 'Show more') {

            currentButton.textContent = 'Hide it';
            hiddenInformation.style.display = 'inline-block';

        } else if (unlockValue.checked && currentButton.textContent == 'Hide it') {

            currentButton.textContent = 'Show more';
            hiddenInformation.style.display = 'none';
        }
    }
}