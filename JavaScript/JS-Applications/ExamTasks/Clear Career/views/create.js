import { createOffer } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('content');


export function showCreate() {
    render(createTemplate(), mainElement);
}

let createTemplate = () => html`
<section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
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

    await createOffer(data);

    page.redirect('/dashboard');
}