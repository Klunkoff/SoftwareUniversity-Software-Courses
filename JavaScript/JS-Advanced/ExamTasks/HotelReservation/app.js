window.addEventListener('load', solve);

function solve() {

    let firstNameInput = document.getElementById('first-name');
    let lasNameInput = document.getElementById('last-name');
    let dateInInput = document.getElementById('date-in');
    let dateOutInput = document.getElementById('date-out');
    let peopleCountInput = document.getElementById('people-count');
    let nextButton = document.getElementById('next-btn');
    let infoListElement = document.querySelector('.info-list');
    let confirmListElement = document.querySelector('.confirm-list');
    let verificationElement = document.getElementById('verification');

    nextButton.addEventListener('click', onNext);

    function onNext(event) {

        event.preventDefault();

        if (firstNameInput.value == '' || lasNameInput.value == '' || peopleCountInput.value == ''
            || dateInInput.value == '' || dateOutInput.value == '') {
            return;
        }

        if (new Date(dateInInput.value) >= new Date(dateOutInput.value)) {
            return;
        }

        let liInfoListElement = document.createElement('li');
        liInfoListElement.setAttribute('class', 'reservation-content');

        let articleInfoListElement = document.createElement('article');

        let nameElement = document.createElement('h3');
        nameElement.textContent = `Name: ${firstNameInput.value} ${lasNameInput.value}`;

        let fromDateElement = document.createElement('p');
        fromDateElement.textContent = `From date: ${dateInInput.value}`;

        let toDateElement = document.createElement('p');
        toDateElement.textContent = `To date: ${dateOutInput.value}`;

        let peopleCountElement = document.createElement('p');
        peopleCountElement.textContent = `For ${peopleCountInput.value} people`;

        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'edit-btn');
        buttonEdit.textContent = 'Edit';

        let buttonContinue = document.createElement('button');
        buttonContinue.setAttribute('class', 'continue-btn');
        buttonContinue.textContent = 'Continue';

        articleInfoListElement.appendChild(nameElement);
        articleInfoListElement.appendChild(fromDateElement);
        articleInfoListElement.appendChild(toDateElement);
        articleInfoListElement.appendChild(peopleCountElement);

        liInfoListElement.appendChild(articleInfoListElement);
        liInfoListElement.appendChild(buttonEdit);
        liInfoListElement.appendChild(buttonContinue);

        infoListElement.appendChild(liInfoListElement);

        let editFirstName = firstNameInput.value;
        let editLastName = lasNameInput.value;
        let editDateIn = dateInInput.value;
        let editDateOut = dateOutInput.value;
        let editPeopleCount = peopleCountInput.value;

        firstNameInput.value = '';
        lasNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        peopleCountInput.value = '';

        nextButton.disabled = true;

        buttonEdit.addEventListener('click', onEdit);

        function onEdit() {

            firstNameInput.value = editFirstName;
            lasNameInput.value = editLastName;
            dateInInput.value = editDateIn;
            dateOutInput.value = editDateOut;
            peopleCountInput.value = editPeopleCount;

            liInfoListElement.remove();

            nextButton.disabled = false;
        }

        buttonContinue.addEventListener('click', onContinue);

        function onContinue() {

            let liConfirmListElement = document.createElement('li');
            liConfirmListElement.setAttribute('class', 'reservation-content');

            let articleConfirmListElement = articleInfoListElement;

            liConfirmListElement.appendChild(articleConfirmListElement);
            confirmListElement.appendChild(liConfirmListElement);

            let buttonConfirm = document.createElement('button');
            buttonConfirm.setAttribute('class', 'confirm-btn');
            buttonConfirm.textContent = 'Confirm';

            let buttonCancel = document.createElement('button');
            buttonCancel.setAttribute('class', 'cancel-btn');
            buttonCancel.textContent = 'Cancel';

            liConfirmListElement.appendChild(buttonConfirm);
            liConfirmListElement.appendChild(buttonCancel);

            liInfoListElement.remove();
            buttonEdit.remove();
            buttonContinue.remove();

            buttonConfirm.addEventListener('click', onConfirm);

            function onConfirm() {

                nextButton.disabled = false;

                liConfirmListElement.remove();

                verificationElement.setAttribute('class', 'reservation-confirmed');
                verificationElement.textContent = 'Confirmed.';

                buttonConfirm.remove();
                buttonCancel.remove();
            }

            buttonCancel.addEventListener('click', onCancel);

            function onCancel() {

                nextButton.disabled = false;

                liConfirmListElement.remove();

                verificationElement.setAttribute('class', 'reservation-cancelled');
                verificationElement.textContent = 'Cancelled.';

                buttonConfirm.remove();
                buttonCancel.remove();
            }
        }
    }
}



    
    
