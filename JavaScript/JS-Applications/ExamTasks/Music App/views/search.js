import { getSearchedAlbums } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('main-content');


export async function showSearch() {

    render(searchTemplate(onSubmit), mainElement);
}

async function onSubmit() {
        
    const inputElement = document.getElementById('search-input');
    const resultSection = document.querySelector('.search-result');

    let query = inputElement.value;

    let searchedAlbums = await getSearchedAlbums(`?where=name%20LIKE%20%22${query}%22`);
    
    render(resultTemplate(searchedAlbums), resultSection);
}

let searchTemplate = (onSubmit) => html`
<section id="searchPage">
            <h1>Search by Name</h1>
            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSubmit} class="button-list">Search</button>
            </div>
            <h2>Results:</h2>
            <div class="search-result">
            
            </div>
</section>`;


let resultTemplate = (albums) => html`
${ albums.length == 0
    ? html`<p class="no-result">No result.</p>`
    : albums.map(albumTemplate)}
`;

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
