import { render } from "./node_modules/lit-html/lit-html.js";
import { createTemplate } from "./template.js";

const tbodyElement = document.querySelector('tbody');

export function renderTable(template) {
    render(template.map(createTemplate), tbodyElement);
 }