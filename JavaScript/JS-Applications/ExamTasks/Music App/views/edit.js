import { editAlbum, getAlbumById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let album = await getAlbumById(ctx.params.id);
    render(editTemplate(album), mainElement);
}

let editTemplate = (album) => html`
<section class="editPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" value=${album.name}>

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value=${album.imgUrl}>

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" value=${album.price}>

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value=${album.releaseDate}>

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" value=${album.artist}>

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" value=${album.genre}>

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10"
                            cols="10">${album.description}</textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let name = formData.get('name').trim();
    let imgUrl = formData.get('imgUrl').trim();
    let price = formData.get('price').trim();
    let releaseDate = formData.get('releaseDate').trim();
    let artist = formData.get('artist').trim();
    let genre = formData.get('genre').trim();
    let description = formData.get('description').trim();

    if (name == '' || imgUrl == '' || price == '' || 
    releaseDate == '' || artist == '' || genre == '' || description == '') {
        alert('All fields are required!');
        return;
    }

    let data = {

        name,
        imgUrl,
        price,
        releaseDate,
        artist,
        genre,
        description,
    }

    await editAlbum(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}





