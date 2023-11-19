import { createFurniture } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const containerElement = document.querySelector('.container');


export function showCreate() {
    render(createTemplate(), containerElement);
}

let createTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control " id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control " id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control " id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control " id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control " id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control " id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control " id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let make = formData.get('make');
    let model = formData.get('model');
    let year = formData.get('year');
    let description = formData.get('description');
    let price = formData.get('price');
    let img = formData.get('img');
    let material = formData.get('material');

    year = Number(year);
    price = Number(price);
    
    const makeElement = document.getElementById('new-make');
    const modelElement = document.getElementById('new-model');
    const yearElement = document.getElementById('new-year');
    const descriptionElement = document.getElementById('new-description');
    const priceElement = document.getElementById('new-price');
    const imgElement = document.getElementById('new-image');
    
    let isValidInputs = true;

    make.length >= 4 ? validateInputs(makeElement, true) : validateInputs(makeElement, false);
    model.length >= 4 ? validateInputs(modelElement, true) : validateInputs(modelElement, false);
    year >= 1950 && year <= 2050 ? validateInputs(yearElement, true) : validateInputs(yearElement, false);
    description.length > 10 ? validateInputs(descriptionElement, true) : validateInputs(descriptionElement, false);
    price > 0 ? validateInputs(priceElement, true) : validateInputs(priceElement, false);
    img != '' ? validateInputs(imgElement, true) : validateInputs(imgElement, false);

    function validateInputs(element, boolean) {

        if(boolean) {
            element.classList.add('class', 'is-valid');
            element.classList.remove('class', 'is-invalid');

        } else {
            element.classList.add('class', 'is-invalid');
            element.classList.remove('class', 'is-valid');
            isValidInputs = false;
        }
    }

    if(isValidInputs) {

        let data = {
            make,
            model,
            year,
            description,
            price,
            img,
            material,
        }
        
        await createFurniture(data);
        event.target.reset();
        page.redirect('/catalog');
    }
}


