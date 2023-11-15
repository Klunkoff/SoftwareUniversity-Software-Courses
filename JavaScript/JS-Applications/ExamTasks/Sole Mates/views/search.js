import { getSearchedShoes } from "../data.js";
import { render, html, nothing } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');


export async function showSearch() {

    render(searchTemplate(onSubmit), mainElement);
}

async function onSubmit(event) {

    event.preventDefault();

    const inputElement = document.getElementById('#search-input');
    const resultSection = document.querySelector('.card-wrapper');

    let query = inputElement.value;

    let searchedShoes = await getSearchedShoes(`?where=brand%20LIKE%20%22${query}%22`);

    render(resultTemplate(searchedShoes), resultSection);
}

let searchTemplate = (onSubmit) => html`
<section id="search">
          <h2>Search by Brand</h2>

          <form class="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button @click=${onSubmit} type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          <div id="search-container">
            <ul class="card-wrapper"> 

            </ul>

    </div>
</section>`;


let resultTemplate = (shoes) => html`
${shoes.length == 0
    ? html`<h2>There are no results found.</h2>`
    : shoes.map(shoeTemplate)}
`;

let shoeTemplate = (shoe) => {

    let user = JSON.parse(localStorage.getItem('user'));
    
    let template = html`
    <li class="card">
                <img src="${shoe.imageUrl}" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">${shoe.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                ${user ? html `<a class="details-btn" href="/details/${shoe._id}">Details</a>` : nothing }
                
              </li>`;

    return template;
}
