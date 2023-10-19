import { cats } from "./catSeeder.js";
import { showHideDetails } from "./details.js";
import { render, html } from "./node_modules/lit-html/lit-html.js";
import { createTemplate } from "./template.js";

const section = document.getElementById('allCats');
section.addEventListener('click', showHideDetails);

render(html`<ul>${cats.map(createTemplate)}</ul>`, section);

