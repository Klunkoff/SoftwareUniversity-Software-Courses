import { html, render } from "./node_modules/lit-html/lit-html.js";
import { bookData, createTableTemplate } from "./template.js";


const bodyElement = document.querySelector('body');

render(createTableTemplate(), bodyElement);

let buttonLoadBooks = document.getElementById('loadBooks');

let addFormElement = document.getElementById('add-form');
let buttonAdd = document.querySelector('#add-form [type="submit"]');

let editFormElement = document.getElementById('edit-form')
editFormElement.style.display = 'none';
let buttonEditForm = document.querySelector('#edit-form [type="submit"]');

let tbodyElement = document.querySelector('tbody');

let url = 'http://localhost:3030/jsonstore/collections/books/';

buttonLoadBooks.addEventListener('click', loadAllBooks);
buttonAdd.addEventListener('click', createBook);

function loadAllBooks() {

    fetch(url)
        .then(response => response.json())
        .then(bookData)
        .catch();
}

function createBook(event) {

    event.preventDefault();

    let formData = new FormData(addFormElement);
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

    addFormElement.reset();
}

let currentId = null;

export function editBook(event) {

    addFormElement.style.display = 'none';
    editFormElement.style.display = 'block';

    currentId = event.target.id;

    buttonEditForm.addEventListener('click', onSave);

    let editTitle = event.target.parentElement.parentElement.children[0].textContent;
    let editAuthor = event.target.parentElement.parentElement.children[1].textContent;

    let titleInput = document.querySelector('#edit-form [name="title"]');
    titleInput.value = editTitle;

    let authorInput = document.querySelector('#edit-form [name="author"]');
    authorInput.value = editAuthor;

    
}

export function deleteBook(event) {

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

function onSave(event) {

    event.preventDefault();

    let formData = new FormData(editFormElement);
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

    editFormElement.style.display = 'none';
    addFormElement.style.display = 'block';

    editFormElement.reset();

}