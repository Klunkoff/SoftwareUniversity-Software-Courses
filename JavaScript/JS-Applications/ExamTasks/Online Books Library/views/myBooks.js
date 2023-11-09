import { getMyBooks } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export async function showMyBooks() {

    let user = JSON.parse(localStorage.getItem('user'));
    let myBooks = await getMyBooks(`?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);

    render(mainBooksTemplate(myBooks), mainElement);
}

let mainBooksTemplate = (myBooks) => {

    let template = html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${myBooks == 0 
    ? html`<p class="no-books">No books in database!</p>` 
    : html`<ul class="my-books-list">${myBooks.map(bookTemplate)}</ul>`}
</section>`;

    return template;
}

let bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`;