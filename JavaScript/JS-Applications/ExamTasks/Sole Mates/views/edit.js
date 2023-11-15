import { editShoes, getShoeById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let shoe = await getShoeById(ctx.params.id);
    render(editTemplate(shoe), mainElement);
}

let editTemplate = (shoe) => html`
<section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                value="${shoe.brand}"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                value="${shoe.model}"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                value="${shoe.imageUrl}"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                value="${shoe.release}"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                value="${shoe.designer}"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                value="${shoe.value}"
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

    await editShoes(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}





