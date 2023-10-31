import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { createFruit } from "../data.js";

const mainElement = document.getElementById('site-content');


export function showCreateFruit() {
    render(createTemplate(), mainElement);
}

let createTemplate = () => html`
<section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let name = formData.get('name').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let description = formData.get('description').trim();
    let nutrition = formData.get('nutrition').trim();

    if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
        alert('All fields are required!');
        return;
    }

    let data = {
      name,
      imageUrl, 
      description, 
      nutrition
    }

    await createFruit(data);
    page.redirect('/dashboard');
}

