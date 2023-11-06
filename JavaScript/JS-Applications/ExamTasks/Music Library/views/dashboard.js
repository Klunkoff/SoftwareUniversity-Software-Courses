import { getAllAlbums } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export async function showDashboard() {

    let allAlbums = await getAllAlbums();
    render(dashboardTemplate(allAlbums), mainElement);
}

let dashboardTemplate = (allAlbums) => {

    let template = html`
<section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
    ${allAlbums == 0 
    ? html`<h2>There are no albums added yet.</h2>` 
    : html`${allAlbums.map(albumTemplate)}`}
        </ul>
</section>`;

    return template;
}

let albumTemplate = (album) => html`
<li class="card">
            <img src="${album.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
          </li>`;