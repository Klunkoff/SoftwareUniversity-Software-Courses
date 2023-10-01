window.addEventListener('load', solve);

function solve() {

    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let numberPeopleInput = document.getElementById('people-count');
    let dateInput = document.getElementById('from-date');
    let daysInput = document.getElementById('days-count');

    let buttonNextStep = document.getElementById('next-btn');

    let ticketInfoListElement = document.querySelector('.ticket-info-list');
    let confirmTicketElement = document.querySelector('.confirm-ticket');
    let bodyElement = document.getElementById('body');

    buttonNextStep.addEventListener('click', onNextStep);

    function onNextStep(event) {

        event.preventDefault();

        if (firstNameInput.value == '' || lastNameInput.value == '' || numberPeopleInput.value == ''
            || dateInput.value == '' || daysInput.value == '') {
            return;
        }

        let mainLiElement = document.createElement('li');
        mainLiElement.setAttribute('class', 'ticket');

        let articleElement = document.createElement('article');

        let nameElement = document.createElement('h3');
        nameElement.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        let dateElement = document.createElement('p');
        dateElement.textContent = `From date: ${dateInput.value}`;

        let daysElement = document.createElement('p');
        daysElement.textContent = `For ${daysInput.value} days`;

        let peopleNumberElement = document.createElement('p');
        peopleNumberElement.textContent = `For ${numberPeopleInput.value} people`;

        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'edit-btn');
        buttonEdit.textContent = 'Edit';
        buttonEdit.addEventListener('click', onEdit);

        let buttonContinue = document.createElement('button');
        buttonContinue.setAttribute('class', 'continue-btn');
        buttonContinue.textContent = 'Continue';
        buttonContinue.addEventListener('click', onContinue);

        articleElement.appendChild(nameElement);
        articleElement.appendChild(dateElement);
        articleElement.appendChild(daysElement);
        articleElement.appendChild(peopleNumberElement);

        mainLiElement.appendChild(articleElement);
        mainLiElement.appendChild(buttonEdit);
        mainLiElement.appendChild(buttonContinue);

        ticketInfoListElement.appendChild(mainLiElement);

        editFirstName = firstNameInput.value;
        editLastName = lastNameInput.value;
        editPeopleNumber = numberPeopleInput.value;
        editDate = dateInput.value;
        editDays = daysInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        numberPeopleInput.value = '';
        dateInput.value = '';
        daysInput.value = '';

        buttonNextStep.disabled = true;

        function onEdit() {

            firstNameInput.value = editFirstName;
            lastNameInput.value = editLastName;
            numberPeopleInput.value = editPeopleNumber;
            dateInput.value = editDate;
            daysInput.value = editDays;

            mainLiElement.remove();

            buttonNextStep.disabled = false;

        }

        function onContinue() {

            mainLiElement.removeAttribute('class');
            mainLiElement.setAttribute('class', 'ticket-content');

            mainLiElement.querySelector('.edit-btn').remove();
            mainLiElement.querySelector('.continue-btn').remove();

            let buttonConfirm = document.createElement('button');
            buttonConfirm.setAttribute('class', 'confirm-btn');
            buttonConfirm.textContent = 'Confirm';
            buttonConfirm.addEventListener('click', onConfirm);

            let buttonCancel = document.createElement('button');
            buttonCancel.setAttribute('class', 'cancel-btn');
            buttonCancel.textContent = 'Cancel';
            buttonCancel.addEventListener('click', onCancel);

            mainLiElement.appendChild(buttonConfirm);
            mainLiElement.appendChild(buttonCancel);
            confirmTicketElement.appendChild(mainLiElement);

            function onConfirm() {

                bodyElement.innerHTML = '';

                let thankyouElement = document.createElement('h1');
                thankyouElement.setAttribute('id', 'thank-you');
                thankyouElement.textContent = 'Thank you, have a nice day!';

                let buttonBack = document.createElement('button');
                buttonBack.setAttribute('id', 'back-btn');
                buttonBack.textContent = 'Back';
                buttonBack.addEventListener('click', onBack);

                bodyElement.appendChild(thankyouElement);
                bodyElement.appendChild(buttonBack);

                function onBack() {

                    location.reload();
                }
            }

            function onCancel() {

                confirmTicketElement.innerHTML = '';

                buttonNextStep.disabled = false;

            }
        }
    }
}




