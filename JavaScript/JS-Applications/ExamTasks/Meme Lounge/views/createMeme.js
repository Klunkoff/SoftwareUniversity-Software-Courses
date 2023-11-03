import { checkUserNav } from "../app.js";
import { createMeme } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { notificationAlert } from "./notificationAlert.js";

const mainElement = document.querySelector('main');


export function showCreateMeme() {
    render(createTemplate(), mainElement);
}

let createTemplate = () => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

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

    await createMeme(data);

    checkUserNav();
    page.redirect('/allMemes');
}