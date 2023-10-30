import { editOffer, getOfferById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let offer = await getOfferById(ctx.params.id)
    render(editTemplate(offer), mainElement);
}

let editTemplate = (offer) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                value="${offer.title}"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                value="${offer.imageUrl}"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                value="${offer.category}"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                .value="${offer.description}"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                .value="${offer.requirements}"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                value="${offer.salary}"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let title = formData.get('title').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let category = formData.get('category').trim();
    let description = formData.get('description').trim();
    let requirements = formData.get('requirements').trim();
    let salary = formData.get('salary').trim();

    if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
        return alert('All fields are required!');
    }

    let data = {
        title,
        imageUrl, 
        category, 
        description, 
        requirements, 
        salary
      }

    await editOffer(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}