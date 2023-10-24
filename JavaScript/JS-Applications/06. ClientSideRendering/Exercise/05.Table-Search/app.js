import { get } from "./api.js";
import { onClick } from "./search.js";
import { renderTable } from "./view.js";

document.querySelector('#searchBtn').addEventListener('click', onClick);

let studentDataArray = Object.values(await get());
renderTable(studentDataArray);



