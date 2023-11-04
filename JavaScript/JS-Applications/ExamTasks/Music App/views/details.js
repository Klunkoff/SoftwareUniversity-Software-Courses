import { deleteAlbumById, getAlbumById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id, onDelete);
    render(result, mainElement);
}

let detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="${album.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: ${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>${album.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${ isOwner ? html`<div class="actionBtn">
                        <a href="/edit/${album._id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
                    </div>` : nothing }
                    
                </div>
            </div>
        </section>`;

async function loadDetails(id, onDelete) {

    let album = await getAlbumById(id);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = null;

    if (user) {
        isOwner = user._id == album._ownerId;
    }

    return detailsTemplate(album, isOwner, onDelete);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this meme?');

        if(choice) {
            await deleteAlbumById(context.params.id);
            page.redirect('/catalog');
        }

}

