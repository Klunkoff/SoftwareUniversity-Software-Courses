import { checkUserNav } from "../app.js";
import { register } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const mainElement = document.getElementById('site-content');

export function showRegister() {
    render(registerTemplate(), mainElement);
}

let registerTemplate = () => html`
<section id="register">
            <div class="container">
                <form @submit=${onSubmit} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    
    let username = formData.get('username').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('repeatPass').trim();

    if (username == '' || password == '' || repass == '') {
        alert('All fields are required!');
        return;
    }

    if (password != repass) {
        event.target.reset();
        alert('Passwords did not match!');
        return;
    }

    await register(username, password);
    checkUserNav();
    page.redirect('/catalog');
}