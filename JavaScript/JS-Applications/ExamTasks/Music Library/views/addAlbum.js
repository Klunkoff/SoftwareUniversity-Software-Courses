import { addAlbum } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');


export function showAddAlbum() {
    render(addAlbumTemplate(), mainElement);
}

let addAlbumTemplate = () => html`
<section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let singer = formData.get('singer').trim();
    let album = formData.get('album').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let release = formData.get('release').trim();
    let label = formData.get('label').trim();
    let sales = formData.get('sales').trim();

    if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
        return alert('All fields are required!');
    }

    let data = {
        singer,
        album, 
        imageUrl, 
        release, 
        label, 
        sales
      }

    await addAlbum(data);

    page.redirect('/dashboard');
}