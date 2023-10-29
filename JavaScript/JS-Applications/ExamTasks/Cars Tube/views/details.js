import { deleteCarById, getCarById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id, onDelete);
    render(result, mainElement);
}

let detailsTemplate = (car, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>
            ${isOwner 
                ? html`
                <div class="listings-buttons">
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
                </div>`
                : nothing }

    </div>
</section>`;


async function loadDetails(id, onDelete) {

    let car = await getCarById(id);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = null;

    if (user) {
        isOwner = user._id == car._ownerId;
    }

    return detailsTemplate(car, isOwner, onDelete);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this car?');

    if (choice) {
        await deleteCarById(context.params.id);
        page.redirect('/catalog');
    }

}

