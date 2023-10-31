import { getCatalog } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";


const mainElement = document.getElementById('site-content');

export async function showDashboard() {

    let catalog = await getCatalog();
    render(catalogTemplate(catalog), mainElement);
}

let catalogTemplate = (catalog) => html`
<h2>Fruits</h2>
    <section id="dashboard">
        ${catalog.length == 0 
            ? html`<h2>No fruit info yet.</h2>` 
            : html`${catalog.map(fruitTemplate)}`}
    </section>`;

let fruitTemplate = (fruit) => {

    let template = html`
    <div class="fruit">
            <img src="${fruit.imageUrl}" alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          </div>`;

    return template;
}