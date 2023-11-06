import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('site-content');

export function showHome() {
    render(homeTemplate(), mainElement);
}

let homeTemplate = () => {

    let template = html`
<section id="home">
        <img src="./images/landing.png" alt="home" />

        <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
            here!</span></h2>
      </section>`;

    return template;
} 