import { render, html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";

const mainElement = document.getElementById('main-content');

export function showLogin() {
    render(loginTemplate(), mainElement);
}

let loginTemplate = () => html`
<section id="login-page" class="auth">
            <form @submit=${onSubmit} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    if(email == '' || password == '') {
        return alert('All fields are required');
    }

    await login(email, password);
    checkUserNav();
    page.redirect('/dashboard');
}