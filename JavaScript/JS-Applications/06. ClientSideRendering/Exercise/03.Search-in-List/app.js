import { firstView } from "./views.js";
import { towns } from "./towns.js";
import { search } from "./search.js";

const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click', search);

firstView(towns);
