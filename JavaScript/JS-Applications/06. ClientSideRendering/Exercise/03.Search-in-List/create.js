import { html } from "./node_modules/lit-html/lit-html.js";

export function createElement(element) {
    return html`<li>${element}</li>`;
 }