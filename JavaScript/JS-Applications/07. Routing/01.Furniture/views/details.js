import { deleteFurnitureById, getFurnitureById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const containerElement = document.querySelector('.container');

export async function showDetails(ctx) {

    let result = await loadFurniture(ctx.params.id, onDelete);
    render(result, containerElement);

    async function onDelete() {

        let choice = confirm('Are you sure you want to delete this furniture?');

        if(choice) {
            await deleteFurnitureById(ctx.params.id);
            page.redirect('/catalog');
        }
    }
}

let detailsTemplate = (furniture, isOwner, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=".${furniture.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${furniture.make}</span></p>
        <p>Model: <span>${furniture.model}</span></p>
        <p>Year: <span>${furniture.year}</span></p>
        <p>Description: <span>${furniture.description}</span></p>
        <p>Price: <span>${furniture.price}</span></p>
        <p>Material: <span>${furniture.material}</span></p>
        ${isOwner ? html`
        <div>
            <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
        </div>` : null}
    </div>
</div>`;

async function loadFurniture(id, onDelete) {

    let furniture = await getFurnitureById(id);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = user._id == furniture._ownerId;

    return detailsTemplate(furniture, isOwner, onDelete);
}

