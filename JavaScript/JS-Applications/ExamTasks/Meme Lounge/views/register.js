import { render, html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";
import { notificationAlert } from "./notificationAlert.js";

const mainElement = document.querySelector('main');

export function showRegister() {
    render(registerTemplate(), mainElement);
}

let registerTemplate = () => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let username = formData.get('username').trim();
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('repeatPass').trim();
    let gender = formData.get('gender').trim();

    if (username == '' || email == '' || password == '' || repass == '') {
        notificationAlert('All fields are required!');
        return;
    }

    if (password != repass) {
        event.target.reset();
        notificationAlert('Passwords did not match!');
        return;
    }

    await register(username, email, password, gender);
    checkUserNav();
    page.redirect('/allMemes');
}