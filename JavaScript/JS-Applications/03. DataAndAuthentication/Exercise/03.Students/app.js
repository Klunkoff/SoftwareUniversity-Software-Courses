let formElement = document.getElementById('form');
let tbodyElement = document.querySelector('tbody');
let buttonSubmit = document.getElementById('submit');

let url = 'http://localhost:3030/jsonstore/collections/students/';

window.addEventListener('load', getData);
buttonSubmit.addEventListener('click', createStudent);

function createStudent(event) {

    event.preventDefault();

    let data = new FormData(formElement);

    let firstName = data.get('firstName').trim();
    let lastName = data.get('lastName').trim();
    let facultyNumber = (data.get('facultyNumber').trim());
    let grade = (data.get('grade').trim());

    if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
        return;
    }

    tbodyElement.innerHTML = '';

    fetch(url, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade,
        }),
    })
        .then(response => response.json())
        .then()
        .catch();

    getData()
}

function getData(event) {

    event.preventDefault();

    fetch(url)
        .then(response => response.json())
        .then(onData)
        .catch();

    function onData(data) {

        tbodyElement.innerHTML = '';

        Object.entries(data).forEach((el) => {

            let tableRowElement = document.createElement('tr');

            let tdFirstName = document.createElement('td');
            tdFirstName.textContent = el[1].firstName;

            let tdLastName = document.createElement('td');
            tdLastName.textContent = el[1].lastName;

            let tdfacultyNumber = document.createElement('td');
            tdfacultyNumber.textContent = el[1].facultyNumber;

            let tdGrade = document.createElement('td');
            tdGrade.textContent = el[1].grade;

            tableRowElement.appendChild(tdFirstName);
            tableRowElement.appendChild(tdLastName);
            tableRowElement.appendChild(tdfacultyNumber);
            tableRowElement.appendChild(tdGrade);

            tbodyElement.appendChild(tableRowElement);
        });
    }
}