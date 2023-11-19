import { getMyFurniture } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const containerElement = document.querySelector('.container');

export async function showMyFurniture() {

    let user = JSON.parse(localStorage.getItem('user'));
    let myFurnitures = await getMyFurniture(`?where=_ownerId%3D%22${user._id}%22`);

    render(mainCatalogTemplate(myFurnitures), containerElement);
}

let mainCatalogTemplate = (myFurnitures) => {

    let element = html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${myFurnitures.map(furnitureTemplate)}
</div>`;

    return element;
}

let furnitureTemplate = (furniture) => html`<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${furniture.img}" />
            <p>${furniture.description}</p>
            <footer>
                <p>Price: <span>${furniture.price} $</span></p>
            </footer>
            <div>
                <a href="${`/details/${furniture._id}`}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>`;