import { render, html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";
import { notificationAlert } from "./notificationAlert.js";

const mainElement = document.querySelector('main');

export function showLogin() {
    render(loginTemplate(), mainElement);
}

let loginTemplate = () => html`
<section id="login">
            <form @submit=${onSubmit} id="login-form">
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    if(email == '' || password == '') {
        notificationAlert('All fields are required!');
        return;
    }

    await login(email, password);
    checkUserNav();
    page.redirect('/allMemes');
}