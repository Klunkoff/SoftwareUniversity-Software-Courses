import { render, html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../data.js";
import page from "../node_modules/page/page.mjs";
import { checkUserNav } from "../app.js";

const containerElement = document.querySelector('.container');

export function showRegister() {
    render(registerTemplate(), containerElement);
}

let registerTemplate = () => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>`;

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('rePass').trim();

    if (password != repass) {
        event.target.reset();
        throw alert('Passwords did not match!');
    }

    await register(email, password);
    checkUserNav();
    page.redirect('/catalog');
}