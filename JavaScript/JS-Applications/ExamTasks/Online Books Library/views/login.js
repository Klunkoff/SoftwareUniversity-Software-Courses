import { render, html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";

const mainElement = document.getElementById('site-content');

export function showLogin() {
    render(loginTemplate(), mainElement);
}

let loginTemplate = () => html`
<section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
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