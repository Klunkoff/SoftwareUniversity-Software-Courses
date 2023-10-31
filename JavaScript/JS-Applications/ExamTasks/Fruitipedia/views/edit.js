import { editFruit, getFruitById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let fruit = await getFruitById(ctx.params.id);
    render(editTemplate(fruit), mainElement);
}

let editTemplate = (fruit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                value="${fruit.name}"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                value="${fruit.imageUrl}"
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value="${fruit.description}"
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value="${fruit.nutrition}"
              ></textarea>
              <button type="submit">post</button>
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

    await editFruit(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}





