function attachEvents() {

    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    let phonebookElement = document.getElementById('phonebook');

    let buttonLoad = document.getElementById('btnLoad');
    let buttonCreate = document.getElementById('btnCreate');
    let url = 'http://localhost:3030/jsonstore/phonebook/';

    buttonLoad.addEventListener('click', getData);
    buttonCreate.addEventListener('click', onCreate);

    function getData() {

        phonebookElement.innerHTML = '';

        fetch(url)
            .then(response => response.json())
            .then(phonebookData)
            .catch();

        function phonebookData(data) {

            Object.entries(data).forEach((el) => {

                let liElement = document.createElement('li');
                liElement.textContent = `${el[1].person}: ${el[1].phone}`;
                liElement.id = el[1]._id;
                liElement.addEventListener('click', onDelete);

                let buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete';

                liElement.appendChild(buttonDelete);
                phonebookElement.appendChild(liElement);
            });
        }
    }

    function onCreate() {

        if(personInput.value == '' || phoneInput.value == '') {
            return;
        }

        let newData = {
            person: personInput.value,
            phone: phoneInput.value,
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(response => response.json)
            .then()
            .catch();

        personInput.value = '';
        phoneInput.value = '';
        phonebookElement.innerHTML = '';

        getData();
    }

    function onDelete(event) {

        if (event.target.nodeName == 'BUTTON') {

            fetch(url + event.currentTarget.id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => (response.json))
                .then(data => console.log(data))
                .catch();
        }
    }
}

attachEvents();