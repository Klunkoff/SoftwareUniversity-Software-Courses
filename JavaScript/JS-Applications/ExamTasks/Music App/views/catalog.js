import { getCatalog } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";


const mainElement = document.getElementById('main-content');

export async function showCatalog() {

    let catalog = await getCatalog();
    render(catalogTemplate(catalog), mainElement);
}

let catalogTemplate = (catalog) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${catalog.length == 0 ? html`
    <p>No Albums in Catalog!</p>` : html`${catalog.map(albumTemplate)}`}
</section>`;

let albumTemplate = (album) => {

    let userData = JSON.parse(localStorage.getItem('user'));

    let template = html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <div class="btn-group">
                <a href="/details/${album._id}" id="details" style="display: ${userData ? 'block' : 'none'}" >Details</a>
            </div>
        </div>
    </div>`;

    return template;
}