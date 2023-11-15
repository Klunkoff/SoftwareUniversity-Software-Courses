import { deleteShoeById, getShoeById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id, onDelete);
    render(result, mainElement);
}

let detailsTemplate = (shoe, isOwner, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${shoe.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
              <p>
                Model: <span id="details-model">${shoe.model}</span>
              </p>
              <p>Release date: <span id="details-release">${shoe.release}</span></p>
              <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
              <p>Value: <span id="details-value">${shoe.value}</span></p>
            </div>

            <!--Edit and Delete are only for creator-->
            ${ isOwner ? html `
            <div id="action-buttons">
              <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : nothing }
            
          </div>
        </section>`;


async function loadDetails(id, onDelete) {

    let shoe = await getShoeById(id);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = null;

    if (user) {
        isOwner = user._id == shoe._ownerId;
    }

    return detailsTemplate(shoe, isOwner, onDelete);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this shoe?');

    if (choice) {
        await deleteShoeById(context.params.id);
        page.redirect('/dashboard');
    }
}


