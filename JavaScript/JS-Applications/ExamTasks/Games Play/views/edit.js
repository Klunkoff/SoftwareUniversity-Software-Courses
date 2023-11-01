import { editGame, getGameById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let game = await getGameById(ctx.params.id);
    render(editTemplate(game), mainElement);
}

let editTemplate = (game) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${game.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${game.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${game.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let title = formData.get('title').trim();
    let category = formData.get('category').trim();
    let maxLevel = formData.get('maxLevel').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let summary = formData.get('summary').trim();

    if (title == '' || category == '' || maxLevel == '' ||
        imageUrl == '' || summary == '') {
        return alert('All fields are required!');
    }

    let data = {

        title,
        category,
        maxLevel,
        imageUrl,
        summary
    }

    await editGame(context.params.id,data);

    page.redirect(`/details/${context.params.id}`);
}