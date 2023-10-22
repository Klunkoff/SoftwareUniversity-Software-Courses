import { html } from "./node_modules/lit-html/lit-html.js";

export function createOption(option) {

    let template = html`<option value="${option[1]._id}">${option[1].text}</option>`;
    return template;
}