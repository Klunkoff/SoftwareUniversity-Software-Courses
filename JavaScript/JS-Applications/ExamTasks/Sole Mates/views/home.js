import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export function showHome() {
    render(homeTemplate(), mainElement);
}

let homeTemplate = () => {

    let template = html`
<section id="home">
          <h1>Welcome to Sole Mates</h1>
          <img src="./images/home.jpg" alt="home" />
          <h2>Browse through the shoe collectibles of our users</h2>
          <h3>Add or manage your items</h3>
        </section>`;

    return template;
} 