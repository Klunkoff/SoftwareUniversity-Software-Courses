import { render, html } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('root');
const form = document.querySelector('form');
document.getElementById('btnLoadTowns').addEventListener('click', onLoad);

function onLoad(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let citiesArray = formData.get('towns').split(', ');

    render(html`<ul>${(citiesArray.map(createTemplate))}</ul>`, root);
}

function createTemplate(city) {

    let template = html`<li>${city}</li>`;
    return template;
}