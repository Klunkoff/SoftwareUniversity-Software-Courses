import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('content');

export function showHome() {

    render(homeTemplate(), mainElement);
}

let homeTemplate = () => {

    let template = html`
<section class="welcome-content">
            <article class="welcome-content-text">
                <h1>We Care</h1>
                <h1 class="bold-welcome">Your Pets</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </article>
            <article class="welcome-content-image">
                <img src="./images/header-dog.png" alt="dog">
            </article>
        </section>`;

    return template;
}


