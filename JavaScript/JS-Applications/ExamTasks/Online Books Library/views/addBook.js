import { addBook } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');


export function showAddBook() {
    render(addBookTemplate(), mainElement);
}

let addBookTemplate = () => html`
<section id="create-page" class="create">
            <form @submit=${onSubmit} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let type = formData.get('type').trim();

    if (title == '' || description == '' || imageUrl == '' || type == '') {
        return alert('All fields are required!');
    }

    let data = {

        title,
        description,
        imageUrl,
        type,
    }

    await addBook(data);

    page.redirect('/dashboard');
}