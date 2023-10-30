import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.getElementById('content');

export function showHome() {

    render(homeTemplate(), mainElement);
}

let homeTemplate = () => {

    let template = html`
<section id="home">
          <img
            src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
            alt="home"
          />
          <h2>Searching for a job?</h2>
          <h3>The right place for a new career start!</h3>
        </section>`;

    return template;
}


