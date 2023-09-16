function solve() {

    let firstNameInput = document.getElementById('fname');
    let lastNameInput = document.getElementById('lname');
    let emailInput = document.getElementById('email');
    let birthDateInput = document.getElementById('birth');
    let positionInput = document.getElementById('position');
    let salaryInput = document.getElementById('salary');
    let buttonHireWorker = document.getElementById('add-worker');

    let tbodyElement = document.getElementById('tbody');
    let sumElement = document.getElementById('sum');

    
    buttonHireWorker.addEventListener('click', onHire);

    function onHire(event) {

        event.preventDefault();

        if (firstNameInput.value == '' || lastNameInput.value == '' || emailInput.value == '' ||
            birthDateInput.value == '' || positionInput.value == '' || salaryInput.value == '') {

            return;
        }

        let trMainElement = document.createElement('tr');

        let firstNameElement = document.createElement('td');
        firstNameElement.textContent = firstNameInput.value;

        let lastNameElement = document.createElement('td');
        lastNameElement.textContent = lastNameInput.value;

        let emailElement = document.createElement('td');
        emailElement.textContent = emailInput.value;

        let birthDateElement = document.createElement('td');
        birthDateElement.textContent = birthDateInput.value;

        let positionElement = document.createElement('td');
        positionElement.textContent = positionInput.value;

        let salaryElement = document.createElement('td');
        salaryElement.textContent = salaryInput.value;

        let buttonsElement = document.createElement('td');

        let buttonFired = document.createElement('button');
        buttonFired.setAttribute('class', 'fired');
        buttonFired.textContent = 'Fired';

        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'edit');
        buttonEdit.textContent = 'Edit';

        buttonsElement.appendChild(buttonFired);
        buttonsElement.appendChild(buttonEdit);

        trMainElement.appendChild(firstNameElement);
        trMainElement.appendChild(lastNameElement);
        trMainElement.appendChild(emailElement);
        trMainElement.appendChild(birthDateElement);
        trMainElement.appendChild(positionElement);
        trMainElement.appendChild(salaryElement);
        trMainElement.appendChild(buttonsElement);

        tbodyElement.appendChild(trMainElement);

        let currentSalary = Number(sumElement.textContent);
        currentSalary += Number(salaryInput.value);
        sumElement.textContent = currentSalary.toFixed(2);

        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthDateInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        buttonEdit.addEventListener('click', onEdit);

        function onEdit() {

            let currentSalary = Number(sumElement.textContent);
            currentSalary -= Number(salaryElement.textContent);
            sumElement.textContent = currentSalary.toFixed(2);

            firstNameInput.value = firstNameElement.textContent;
            lastNameInput.value = lastNameElement.textContent;
            emailInput.value = emailElement.textContent;
            birthDateInput.value = birthDateElement.textContent;
            positionInput.value = positionElement.textContent;
            salaryInput.value = salaryElement.textContent;

            trMainElement.remove();
        }

        buttonFired.addEventListener('click', onFired);

        function onFired() {

            let currentSalary = Number(sumElement.textContent);
            currentSalary -= Number(salaryElement.textContent);
            sumElement.textContent = currentSalary.toFixed(2);

            trMainElement.remove();
        }
    }
}

solve()