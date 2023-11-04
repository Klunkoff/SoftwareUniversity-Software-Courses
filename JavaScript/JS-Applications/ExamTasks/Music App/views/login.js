import { checkUserNav } from "../app.js";
import { login } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";


const mainElement = document.getElementById('main-content');

export function showLogin() {
    render(loginTemplate(), mainElement);
}

let loginTemplate = () => html`
<section id="loginPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    if(email == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    await login(email, password);
    checkUserNav();
    page.redirect('/home');
}