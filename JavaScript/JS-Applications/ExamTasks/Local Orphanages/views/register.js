import { render, html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";

const mainElement = document.getElementById('main-content');

export function showRegister() {
    render(registerTemplate(), mainElement);
}

let registerTemplate = () => html`
<section id="register-page" class="auth">
            <form @submit=${onSubmit} id="register">
                <h1 class="title">Register</h1>

                <article class="input-group">
                    <label for="register-email">Email: </label>
                    <input type="email" id="register-email" name="email">
                </article>

                <article class="input-group">
                    <label for="register-password">Password: </label>
                    <input type="password" id="register-password" name="password">
                </article>

                <article class="input-group">
                    <label for="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword">
                </article>

                <input type="submit" class="btn submit-btn" value="Register">
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('repeatPassword').trim();

    if(email == '' || password == '') {
        return alert('All fields are required');
    }

    if (password != repass) {
        event.target.reset();
        throw alert('Passwords did not match!');
    }

    await register(email, password);
    checkUserNav();
    page.redirect('/dashboard');
}