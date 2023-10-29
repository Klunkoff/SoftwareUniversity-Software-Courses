import { editCar, getCarById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

let context = null;

export async function showEdit(ctx) {

    context = ctx;

    let car = await getCarById(ctx.params.id);
    render(editTemplate(car), mainElement);
}

let editTemplate = (car) => html`
<section id="edit-listing">
            <div class="container">

                <form @submit=${onSubmit} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let brand = formData.get('brand').trim();
    let model = formData.get('model').trim();
    let description = formData.get('description').trim();
    let year = formData.get('year').trim();
    let imageUrl = formData.get('imageUrl').trim();
    let price = formData.get('price').trim();

    year = Number(year);
    price = Number(price);

    if (brand == '' || model == '' || description == '' ||
        year < 0 || imageUrl == '' || price < 0) {
        alert('All fields are required!');
        return;
    }

    let data = {

        brand,
        model,
        description,
        year,
        imageUrl,
        price,
    }

    await editCar(context.params.id, data);

    page.redirect(`/details/${context.params.id}`);
}





