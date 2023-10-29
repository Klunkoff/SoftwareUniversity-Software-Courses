import { getSearchedCars } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');


export async function showSearch() {

    render(searchTemplate(onSubmit), mainElement);
}

async function onSubmit() {

    const inputElement = document.getElementById('search-input');
    const resultSection = document.querySelector('.listings');

    let query = inputElement.value;

    let searchedCars = await getSearchedCars(`?where=year%3D${query}`);

    render(resultTemplate(searchedCars), resultSection);
}

let searchTemplate = (onSubmit) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onSubmit} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

    </div>
</section>`;


let resultTemplate = (cars) => html`
${cars.length == 0
    ? html`<p class="no-cars"> No results.</p>`
    : cars.map(carTemplate)}
`;

let carTemplate = (car) => {

    let template = html`
    <div class="listing">
        <div class="preview">
            <img src="${car.imageUrl}">
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`;

    return template;
}
