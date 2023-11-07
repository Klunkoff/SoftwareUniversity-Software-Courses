import { editTheater, getTheaterById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');

let context = null;

export async function showEditTheater(ctx) {

    context = ctx;

    let theater = await getTheaterById(ctx.params.id)
    render(editTheaterTemplate(theater), mainElement);
}

let editTheaterTemplate = (theater) => html`
<section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="${theater.title}">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${theater.date}">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        value="${theater.author}">
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${theater.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        value="${theater.imageUrl}">
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

    await editTheater(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}