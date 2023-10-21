import { createElement } from "./create.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const divTowns = document.getElementById('towns');
const divResult = document.getElementById('result');

export function firstView (towns) {
   render(html`<ul>${towns.map(createElement)}</ul>`, divTowns);
}

export function matchesView(counter) {
    render(html`${counter} matches found`, divResult);
} 