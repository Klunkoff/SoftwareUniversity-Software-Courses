import { editMeme, getMemeById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { notificationAlert } from "./notificationAlert.js";

const mainElement = document.querySelector('main');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let meme = await getMemeById(ctx.params.id);
    render(editTemplate(meme), mainElement);
}

let editTemplate = (meme) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value="${meme.title}">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">
                ${meme.description}
            </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value="${meme.imageUrl}">
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let imageUrl = formData.get('imageUrl').trim();

    if (title == '' || description == '' || imageUrl == '') {
        notificationAlert('All fields are required!');
        return;
    }

    let data = {

        title,
        description,
        imageUrl,
    }

    await editMeme(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);

}

