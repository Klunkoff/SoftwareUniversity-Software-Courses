import { createTheater } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');


export function showCreate() {
    render(createTemplate(), mainElement);
}

let createTemplate = () => html`
<section id="createPage">
    <form @submit=${onSubmit} class="create-form">
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let title = formData.get('title').trim();
    let date = formData.get('date').trim();
    let author = formData.get('author').trim();
    let description = formData.get('description').trim();
    let imageUrl = formData.get('imageUrl').trim();

    if (title == '' || date == '' || author == '' || description == '' || imageUrl == '') {
        return alert('All fields are required!');
    }

    let data = {
        title,
        date,
        author,
        imageUrl,
        description,
    }

    await createTheater(data);

    page.redirect('/home');
}