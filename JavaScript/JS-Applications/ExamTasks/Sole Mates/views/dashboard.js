import { getCatalog } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";


const mainElement = document.getElementById('site-content');

export async function showDashboard() {

    let catalog = await getCatalog();
    render(catalogTemplate(catalog), mainElement);
}

let catalogTemplate = (catalog) => html`
<section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
        ${catalog.length == 0 
            ? html`<h2>There are no items added yet.</h2>` 
            : html`${catalog.map(shoeTemplate)}`}
          </ul>
</section>`;

let shoeTemplate = (shoe) => {

    let template = html`
    <li class="card">
        <img src="${shoe.imageUrl}" alt="travis" />
        <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
        <strong>Model: </strong
        ><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        <a class="details-btn" href="/details/${shoe._id}">Details</a>
    </li>`;

    return template;
}