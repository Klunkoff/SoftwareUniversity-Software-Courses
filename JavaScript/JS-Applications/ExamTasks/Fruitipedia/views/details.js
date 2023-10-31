import { deleteFruitById, getFruitById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id, onDelete);
    render(result, mainElement);
}

let detailsTemplate = (fruit, isOwner, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruit.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${fruit.nutrition}</p>
              </div>

            <!--Edit and Delete are only for creator-->
            ${ isOwner ? html `
            <div id="action-buttons">
              <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : nothing }
            
            </div>
        </div>
      </section>`;


async function loadDetails(id, onDelete) {

    let fruit = await getFruitById(id);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = null;

    if (user) {
        isOwner = user._id == fruit._ownerId;
    }

    return detailsTemplate(fruit, isOwner, onDelete);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this fruit?');

    if (choice) {
        await deleteFruitById(context.params.id);
        page.redirect('/dashboard');
    }
}


