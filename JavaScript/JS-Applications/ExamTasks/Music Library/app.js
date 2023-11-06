import page from "./node_modules/page/page.mjs";

import { logout } from "./data.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showHome } from "./views/home.js";
import { showDashboard } from "./views/dashboard.js";
import { showAddAlbum } from "./views/addAlbum.js";
import { showDetails } from "./views/details.js";
import { showEditAlbum } from "./views/edit.js";


showHome();
checkUserNav();

page('/dashboard', showDashboard);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showAddAlbum);
page('/details/:id', showDetails);
page('/edit/:id', showEditAlbum);


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
