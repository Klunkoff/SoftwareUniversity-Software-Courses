import { get } from "./api.js";
import { render } from "./node_modules/lit-html/lit-html.js";
import { createOption } from "./template.js";

const selectElement = document.getElementById('menu');

export async function renderView() {

    let getResultArray = Object.entries(await get());
    render(getResultArray.map(createOption), selectElement);
}
