import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { createCar } from "../data.js";

const mainElement = document.getElementById('site-content');


export function showCreateCar() {
    render(createTemplate(), mainElement);
}

let createTemplate = () => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
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

    await createCar(data);
    page.redirect('/catalog');
}

