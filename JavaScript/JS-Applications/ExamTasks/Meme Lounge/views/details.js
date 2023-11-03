import { deleteMemeById, getMemeById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.querySelector('main');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadMeme(ctx.params.id, onDelete);
    render(result, mainElement);
}

let detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${meme.description}
            </p>
                ${isOwner ? html`
                <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : nothing }
            
        </div>
    </div>
</section>`;


async function loadMeme(id, onDelete) {

    let meme = await getMemeById(id);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = null;

    if (user) {
        isOwner = user._id == meme._ownerId;
    }

    return detailsTemplate(meme, isOwner, onDelete);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this meme?');

        if(choice) {
            await deleteMemeById(context.params.id);
            page.redirect('/allMemes');
        }

}