import { getAllBooks } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export async function showDashboard() {

    let allBooks = await getAllBooks();
    render(dashboardTemplate(allBooks), mainElement);
}

let dashboardTemplate = (allBooks) => {

    let template = html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${allBooks == 0 
    ? html`<p class="no-books">No books in database!</p>` 
    : html`<ul class="other-books-list">${allBooks.map(bookTemplate)}</ul>`}
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