import { onAdd } from "./getNewData.js";
import { renderView } from "./view.js";

document.querySelector('[type="submit"]').addEventListener('click', onAdd);

renderView();
