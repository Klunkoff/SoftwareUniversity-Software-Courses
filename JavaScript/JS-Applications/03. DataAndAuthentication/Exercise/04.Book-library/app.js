let buttonLoadBooks = document.getElementById('loadBooks');
let buttonSubmit = document.querySelector('form button');

let tbodyElement = document.querySelector('tbody');
let formElement = document.querySelector('form');

let url = 'http://localhost:3030/jsonstore/collections/books/';

buttonLoadBooks.addEventListener('click', loadAllBooks);
buttonSubmit.addEventListener('click', createBook);

function loadAllBooks() {

    tbodyElement.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then(onData)
        .catch();

    function onData(data) {

        Object.entries(data).forEach((el) => {

            let trElement = document.createElement('tr');

            let tdName = document.createElement('td');
            tdName.textContent = el[1].title;

            let tdAuthor = document.createElement('td');
            tdAuthor.textContent = el[1].author;

            let tdButtons = document.createElement('td');

            let buttonEdit = document.createElement('button');
            buttonEdit.textContent = 'Edit';
            buttonEdit.addEventListener('click', editBook);
            buttonEdit.id = el[0];

            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', deleteBook);
            buttonDelete.id = el[0];

            tdButtons.appendChild(buttonEdit);
            tdButtons.appendChild(buttonDelete);

            trElement.appendChild(tdName);
            trElement.appendChild(tdAuthor);
            trElement.appendChild(tdButtons);

            tbodyElement.appendChild(trElement);
        });
    }
}

function createBook(event) {

    event.preventDefault();

    let formData = new FormData(formElement);
    let title = formData.get('title');
    let author = formData.get('author');

    if (title == '' || author == '') {
        return;
    }

    let data = { author, title };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch();

        document.querySelector('[name="title"]').value = '';
        document.querySelector('[name="author"]').value = '';
}

function editBook(event) {

    console.log(event.target.id);
    let currentId = event.target.id;

    buttonSubmit.removeEventListener('click', createBook);
    buttonSubmit.addEventListener('click', onSave);
    buttonSubmit.textContent = 'Save';
    formElement.children[0].textContent = 'Edit FORM';

    let editTitle = event.target.parentElement.parentElement.children[0].textContent;
    let editAuthor = event.target.parentElement.parentElement.children[1].textContent;

    let titleInput = document.querySelector('[name="title"]');
    titleInput.value = editTitle;

    let authorInput = document.querySelector('[name="author"]');
    authorInput.value = editAuthor;

    function onSave() {

        let formData = new FormData(formElement);
        let title = formData.get('title');
        let author = formData.get('author');

        if (title == '' || author == '') {
            return;
        }

        let data = { author, title };
       
        fetch(url + currentId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch();

        formElement.children[0].textContent = 'FORM';

        buttonSubmit.addEventListener('click', createBook);
        buttonSubmit.textContent = 'Submit';

        document.querySelector('[name="title"]').value = '';
        document.querySelector('[name="author"]').value = '';
    }
}

function deleteBook(event) {

    event.preventDefault();

    fetch(url + event.target.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .catch();

        loadAllBooks();
}