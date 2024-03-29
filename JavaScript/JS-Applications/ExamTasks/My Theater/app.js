import { logout } from "./data.js";
import page from "./node_modules/page/page.mjs";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEditTheater } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showMyTheaters } from "./views/profile.js";
import { showRegister } from "./views/register.js";


showHome();
checkUserNav();

page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEditTheater);
page('/profile', showMyTheaters);

page.start();


export function checkUserNav() {

    const userElement = Array.from(document.querySelectorAll('.user'));
    const guestElement = Array.from(document.querySelectorAll('.guest'));

    let userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        userElement.forEach((el) => el.style.display = 'inline-block');
        guestElement.forEach((el) => el.style.display = 'none');

    } else {
        userElement.forEach((el) => el.style.display = 'none');
        guestElement.forEach((el) => el.style.display = 'inline-block');
    }
}

let buttonLogout = document.getElementById('logoutBtn');
buttonLogout.addEventListener('click', onLogout);

function onLogout() {
    logout();
    checkUserNav();
    page.redirect('/home');
}
