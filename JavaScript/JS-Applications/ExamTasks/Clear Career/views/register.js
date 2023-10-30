import { render, html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";

const mainElement = document.getElementById('content');

export function showRegister() {
    render(registerTemplate(), mainElement);
}

let registerTemplate = () => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('re-password').trim();

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