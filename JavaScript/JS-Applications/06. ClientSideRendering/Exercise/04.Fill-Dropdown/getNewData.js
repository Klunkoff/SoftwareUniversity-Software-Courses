import { post } from "./api.js";
import { renderView } from "./view.js";

const textInput = document.getElementById('itemText');

export async function onAdd(event) {
    event.preventDefault();

    let text = textInput.value;
    await post({ text });

    renderView();
    textInput.value = '';
}