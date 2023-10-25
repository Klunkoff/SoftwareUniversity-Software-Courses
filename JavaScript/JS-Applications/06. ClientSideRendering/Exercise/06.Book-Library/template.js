import { editBook, deleteBook } from "./app.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";


export function createTableTemplate() {

    let table = html`<button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`;

    return table;
}

export function bookData(data) {

    let tbodyElement = document.querySelector('tbody');

    let books = Object.entries(data);

    render(books.map(createBookTemplate), tbodyElement);

}

function createBookTemplate(book) {

    let template = html`
    <tr>
        <td>${book[1].title}</td>
        <td>${book[1].author}</td>
        <td>
            <button id=${book[0]} @click=${editBook}>Edit</button>
            <button id=${book[0]} @click=${deleteBook}>Delete</button>
        </td>
    </tr>`;

    return template;
}