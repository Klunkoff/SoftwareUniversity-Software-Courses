
import { getAllMemes } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.querySelector('main');

export async function showAllMemes() {

    let allMemes = await getAllMemes();
    render(allMemeTemplate(allMemes), mainElement);
}

let allMemeTemplate = (allMemes) => allMemes.length == 0 ? html`
<p class="no-memes">No memes in database.</p>` : html`
<h1>All Memes</h1>
<div id="memes">
    ${allMemes.map(memeTemplate)}
</div>`;

let memeTemplate = (meme) => {

    let template = html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${meme.title}</p>
                <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${meme._id}">Details</a>
            </div>
        </div>
    </div>`;

    return template;
}


