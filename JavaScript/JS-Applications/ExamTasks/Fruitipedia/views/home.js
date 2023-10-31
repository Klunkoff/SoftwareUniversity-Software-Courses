import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export function showHome() {
    render(homeTemplate(), mainElement);
}

let homeTemplate = () => {

    let template = html`
<section id="home">
          <h1>Learn more about your favorite fruits</h1>
          <img
            src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
            alt="home"
          />

        </section>`;

    return template;
} 