import { getMyCarsById } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export async function showMyCars() {

    let user = JSON.parse(localStorage.getItem('user'));
    let myCars = await getMyCarsById(`?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);

    render(myCarTemplate(myCars), mainElement);
}

let myCarTemplate = (myCars) => html`
<<section id="my-listings">
        <h1>My car listings</h1>
    <div class="listings">
        ${myCars.length == 0 
            ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` 
            : html`${myCars.map(carTemplate)}`}
    </div>
</section>`;

let carTemplate = (car) => {

    let template = html`
    <div class="listing">
                    <div class="preview">
                        <img src="${car.imageUrl}">
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`;

    return template;
}