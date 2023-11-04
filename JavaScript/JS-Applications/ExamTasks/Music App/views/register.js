import { checkUserNav } from "../app.js";
import { register } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-content');

export function showRegister() {
    render(registerTemplate(), mainElement);
}

let registerTemplate = () => html`
<section id="registerPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('conf-pass').trim();

    if (email == '' || password == '' || repass == '') {
        alert('All fields are required!');
        return;
    }

    if (password != repass) {
        event.target.reset();
        alert('Passwords did not match!');
        return;
    }

    await register(email, password);
    checkUserNav();
    page.redirect('/home');
}