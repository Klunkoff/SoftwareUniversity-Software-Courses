import { checkUserNav } from "../app.js";
import { login } from "../data.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";


const mainElement = document.getElementById('site-content');

export function showLogin() {
    render(loginTemplate(), mainElement);
}

let loginTemplate = () => html`
<section id="login">
            <div class="container">
                <form @submit=${onSubmit} id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let username = formData.get('username').trim();
    let password = formData.get('password').trim();

    if(username == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    await login(username, password);
    checkUserNav();
    page.redirect('/catalog');
}