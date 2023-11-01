import { getAllGames } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";


const mainElement = document.getElementById('main-content');

export async function showAllGames() {

    let catalog = await getAllGames();
    render(catalogTemplate(catalog), mainElement);
}

let catalogTemplate = (catalog) => html`
<section id="catalog-page">
            <h1>All Games</h1>
    ${catalog.length == 0 ? html`
    <h3 class="no-articles">No articles yet</h3>` : html`${catalog.map(gameTemplate)}`}
</section>`;

let gameTemplate = (game) => {

    let template = html`
    <div class="allGames">
                <div class="allGames-info">
                    <img src=${game.imageUrl}>
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>

            </div>`;

    return template;
}