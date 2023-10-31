import { getSearchedFruits } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');


export async function showSearch() {

    render(searchTemplate(onSubmit), mainElement);
}

async function onSubmit(event) {

    event.preventDefault();

    const inputElement = document.getElementById('search-input');
    const resultSection = document.querySelector('.search-result');

    let query = inputElement.value;

    let searchedFruits = await getSearchedFruits(`?where=name%20LIKE%20%22${query}%22`);

    render(resultTemplate(searchedFruits), resultSection);
}

let searchTemplate = (onSubmit) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button @click=${onSubmit} class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
 
  </div>
        </section>`;


let resultTemplate = (fruits) => html`
${fruits.length == 0
    ? html`<p class="no-result">No result.</p>`
    : fruits.map(fruitTemplate)}
`;

let fruitTemplate = (fruit) => {
    
    let template = html`
    <div class="fruit">
          <img src="${fruit.imageUrl}" alt="example1" />
          <h3 class="title">${fruit.name}</h3>
          <p class="description">${fruit.description}</p>
          <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          
        </div>`;

    return template;
}

