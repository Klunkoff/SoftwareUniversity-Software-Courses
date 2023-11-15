import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { createShoes } from "../data.js";

const mainElement = document.getElementById('site-content');


export function showCreateShoe() {
    render(createTemplate(), mainElement);
}

let createTemplate = () => html`
<section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let brand = formData.get('brand').trim();
    let model = formData.get('model').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let release = formData.get('release').trim();
    let designer = formData.get('designer').trim();
    let value = formData.get('value').trim();

    if (brand == '' || model == '' || imageUrl == '' ||
        release == '' || designer == '' || value == '') {
        alert('All fields are required!');
        return;
    }

    let data = {
        brand,
        model, 
        imageUrl, 
        release, 
        designer, 
        value
      }

    await createShoes(data);
    page.redirect('/dashboard');
}

