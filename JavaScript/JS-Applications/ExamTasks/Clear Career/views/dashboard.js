import { getAllOffers } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('content');

export async function showDashboard() {

    let allOffers = await getAllOffers();
    render(dashboardTemplate(allOffers), mainElement);
}

let dashboardTemplate = (allOffers) => {

    let template = html`
<section id="dashboard">
    <h2>Job Offers</h2>
        ${allOffers == 0 
        ? html`<h2>No offers yet.</h2>` 
        : html`${allOffers.map(offerTemplate)}`}
</section>`;

    return template;
}

let offerTemplate = (offer) => html`
<div class="offer">
    <img src="${offer.imageUrl}" alt="./images/example3.png" />
    <p>
        <strong>Title: </strong
        ><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
</div>`;
