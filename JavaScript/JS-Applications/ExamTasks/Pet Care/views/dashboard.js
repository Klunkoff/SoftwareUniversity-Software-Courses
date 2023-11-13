import { getAllPets } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('content');

export async function showDashboard() {

    let allPets = await getAllPets();
    render(dashboardTemplate(allPets), mainElement);
}

let dashboardTemplate = (allPets) => {

    let template = html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${allPets == 0 
        ? html`<div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>` 
        : html`${allPets.map(petTemplate)}`}
    </div>
</section>`;

    return template;
}

let petTemplate = (pet) => html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src="${pet.image}">
    </article>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
        <a class="btn" href="/details/${pet._id}">Details</a>
    </div>
</div>`;