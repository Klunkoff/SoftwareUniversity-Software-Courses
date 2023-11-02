import { logout } from "./data.js";
import page from "./node_modules/page/page.mjs";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showMyPosts } from "./views/myPosts.js";
import { showRegister } from "./views/register.js";


showDashboard();
checkUserNav();

page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/my-posts', showMyPosts);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();


export function checkUserNav() {

    const userElement = document.getElementById('user');
    const guestElement = document.getElementById('guest');

    let userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        userElement.style.display = 'inline-block';
        guestElement.style.display = 'none';

    } else {
        userElement.style.display = 'none';
        guestElement.style.display = 'inline-block';
    }
}

let buttonLogout = document.getElementById('logoutBtn');
buttonLogout.addEventListener('click', onLogout);

function onLogout() {
    logout();
    checkUserNav();
    page.redirect('/dashboard');
}
