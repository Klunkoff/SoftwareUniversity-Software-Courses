import { deleteTheaterById, getLikesTheaterById, getMyLikesTheaterById, getTheaterById, likeTheater } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (theater, isOwner, showLikeButton, likes) => {

    let template = html`
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1>Title: ${theater.title}</h1>
                <div>
                    <img src="${theater.imageUrl}" />
                </div>
            </div>
    
            <div class="details">
                <h3>Theater Description</h3>
                <p>${theater.description}</p>
                <h4>Date: ${theater.date}</h4>
                <h4>Author: ${theater.author}</h4>
                <div class="buttons">
                    ${isOwner ? html`
                        <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/edit/${theater._id}">Edit</a>` : nothing}
                    ${showLikeButton ? html`
                        <a @click=${onLike} class="btn-like" href="#">Like</a>` : nothing}
                </div>
                <p class="likes">Likes: ${likes}</p>
            </div>
        </div>
    </section>`;

    return template;

};

async function loadDetails(id) {

    let user = JSON.parse(localStorage.getItem('user'));

    let [theater, likes, hasLike] = await Promise.all([
        getTheaterById(id),
        getLikesTheaterById(`?where=theaterId%3D%22${id}%22&distinct=_ownerId&count`),
        user ? getMyLikesTheaterById(`?where=theaterId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`) : null
    ]);

    let isOwner = null;

    if (user) {
        isOwner = user._id == theater._ownerId;
    }

    let showLikeButton = isOwner == false && hasLike == 0 && user != null;

    return detailsTemplate(theater, isOwner, showLikeButton, likes);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this theater?');

    if (choice) {
        await deleteTheaterById(context.params.id);
        page.redirect('/profile');
    }
}

async function onLike() {

    await likeTheater(context.params.id);

    page.redirect(`/details/${context.params.id}`);
}

