import { createComment, deleteGameById, getCommentsById, getGameById } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

let context = null;

export async function showDetails(ctx) {

    context = ctx;

    let result = await loadDetails(ctx.params.id);
    render(result, mainElement);
}

let detailsTemplate = (game, isOwner, comments, comentator) => {

    let template = html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0 
            ? html`<p class="no-comment">No comments.</p>`
            : html`<ul>${comments.map(commentTemplate)}</ul>`}
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${isOwner ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : nothing}

    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${comentator 
        ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` 
    : nothing }

</section>`;

    return template;
};

let commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;


async function loadDetails(id) {

    let [game, comments] = await Promise.all([getGameById(id), getCommentsById(`?where=gameId%3D%22${id}%22`)]);
    let user = JSON.parse(localStorage.getItem('user'));

    let isOwner = null;
    let comentator = null;

    if (user) {
        isOwner = user._id == game._ownerId;
        comentator = user._id != game._ownerId;
    }

    return detailsTemplate(game, isOwner, comments, comentator);
}

async function onDelete() {

    let choice = confirm('Are you sure you want to delete this game?');

    if (choice) {
        await deleteGameById(context.params.id);
        page.redirect('/home');
    }
}

async function onComment(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let comment = formData.get('comment').trim();

    if (comment == '') {
        return alert('Fill the field');
    }

    let gameId = context.params.id;

    let data = { gameId, comment };

    await createComment(data);
    event.target.reset();
    page.redirect(`/details/${context.params.id}`);
}