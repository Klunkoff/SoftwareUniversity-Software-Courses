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
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
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