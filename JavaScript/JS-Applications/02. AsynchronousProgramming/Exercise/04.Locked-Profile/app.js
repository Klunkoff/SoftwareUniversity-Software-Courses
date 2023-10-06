function lockedProfile() {

    let mainElement = document.getElementById('main');
    let firstDivElement = document.querySelector('.profile');
    firstDivElement.remove();

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(onData)
        .catch();

    function onData(data) {

        for (let keyObject in data) {

            let profileElement = document.createElement('div');
            profileElement.setAttribute('class', 'profile');

            let imageElement = document.createElement('img');
            imageElement.setAttribute('class', 'userIcon');
            imageElement.src = './iconProfile2.png';

            let lockLabelElement = document.createElement('label');
            lockLabelElement.textContent = 'Lock';

            let inputLockElement = document.createElement('input');
            inputLockElement.setAttribute('type', 'radio');
            inputLockElement.setAttribute('name', `user${data[keyObject]._id}Locked`);
            inputLockElement.setAttribute('value', 'lock');
            inputLockElement.checked = true;

            let unlockLabelElement = document.createElement('label');
            unlockLabelElement.textContent = 'Unlock';

            let inputUnlockElement = document.createElement('input');
            inputUnlockElement.setAttribute('type', 'radio');
            inputUnlockElement.setAttribute('name', `user${data[keyObject]._id}Locked`);
            inputUnlockElement.setAttribute('value', 'unlock');

            let brElement = document.createElement('br');
            let hrElement = document.createElement('hr');

            let usernameLabelElement = document.createElement('label');
            usernameLabelElement.textContent = 'Username';

            let inputUsernameElement = document.createElement('input');
            inputUsernameElement.setAttribute('type', 'text');
            inputUsernameElement.setAttribute('name', `user${data[keyObject]._id}Username`);
            inputUsernameElement.setAttribute('value', `${data[keyObject].username}`);
            inputUsernameElement.disabled = true;
            inputUsernameElement.readOnly = true;

            let hiddenDivElement = document.createElement('div');
            hiddenDivElement.setAttribute('id', `user${data[keyObject]._id}HiddenFields`);
            hiddenDivElement.style.display = 'none';

            let hr2Element = document.createElement('hr');

            let emailLabelElement = document.createElement('label');
            emailLabelElement.textContent = 'Email:';

            let inputEmailElement = document.createElement('input');
            inputEmailElement.setAttribute('type', 'email');
            inputEmailElement.setAttribute('name', `user${data[keyObject]._id}Email`);
            inputEmailElement.setAttribute('value', `${data[keyObject].email}`);
            inputEmailElement.disabled = true;
            inputEmailElement.readOnly = true;

            let ageLabelElement = document.createElement('label');
            ageLabelElement.textContent = 'Age:';

            let inputAgeElement = document.createElement('input');
            inputAgeElement.setAttribute('type', 'text');
            inputAgeElement.setAttribute('name', `user${data[keyObject]._id}Age`);
            inputAgeElement.setAttribute('value', `${data[keyObject].age}`);
            inputAgeElement.disabled = true;
            inputAgeElement.readOnly = true;

            let buttonShowMore = document.createElement('button');
            buttonShowMore.textContent = 'Show more';
            buttonShowMore.addEventListener('click', showMore);

            hiddenDivElement.appendChild(hr2Element);
            hiddenDivElement.appendChild(emailLabelElement);
            hiddenDivElement.appendChild(inputEmailElement);
            hiddenDivElement.appendChild(ageLabelElement);
            hiddenDivElement.appendChild(inputAgeElement);

            profileElement.appendChild(imageElement);
            profileElement.appendChild(lockLabelElement);
            profileElement.appendChild(inputLockElement);
            profileElement.appendChild(unlockLabelElement);
            profileElement.appendChild(inputUnlockElement);
            profileElement.appendChild(brElement);
            profileElement.appendChild(hrElement);
            profileElement.appendChild(usernameLabelElement);
            profileElement.appendChild(inputUsernameElement);
            profileElement.appendChild(hiddenDivElement);
            profileElement.appendChild(buttonShowMore);

            mainElement.appendChild(profileElement);
        }
    }

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
