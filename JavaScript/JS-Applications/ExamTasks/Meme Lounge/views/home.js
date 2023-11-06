import { render, html } from "../node_modules/lit-html/lit-html.js";

const mainElement = document.querySelector('main');

export function showHome() {

    render(homeTemplate(), mainElement);
}

let homeTemplate = () => {

    let template = html`
<section id="welcome">
    <div id="welcome-container">
        <h1>Welcome To Meme Lounge</h1>
        <img src="/images/welcome-meme.jpg" alt="meme">
        <h2>Login to see our memes right away!</h2>
        <div id="button-div">
            <a href="/login" class="button">Login</a>
            <a href="/register" class="button">Register</a>
        </div>
    </div>
</section>`;

return template;

} 