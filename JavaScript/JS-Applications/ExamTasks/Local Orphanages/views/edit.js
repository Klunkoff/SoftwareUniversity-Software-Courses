import { editPost, getPostById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let post = await getPostById(ctx.params.id)
    render(editTemplate(post), mainElement);
}

let editTemplate = (post) => html`
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value="${post.title}">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value="${post.description}">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value="${post.imageUrl}">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value="${post.address}">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value="${post.phone}">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let address = formData.get('address').trim();
    let phone = formData.get('phone').trim();

    if (title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
        return alert('All fields are required!');
    }

    let data = {
        title,
        description,
        imageUrl,
        address,
        phone
      }

    await editPost(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}