import { editAlbum, getAlbumById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showEditAlbum(ctx) {

    context = ctx;

    let album = await getAlbumById(ctx.params.id)
    render(editAlbumTemplate(album), mainElement);
}

let editAlbumTemplate = (album) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${album.singer}" />
            <input type="text" name="album" id="album-album" placeholder="Album" value="${album.album}" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${album.imageUrl}" />
            <input type="text" name="release" id="album-release" placeholder="Release date" value="${album.release}" />
            <input type="text" name="label" id="album-label" placeholder="Label" value="${album.label}" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${album.sales}" />

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

    await editAlbum(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}