import { logout } from "./data.js";
import page from "./node_modules/page/page.mjs";
import { showAllMemes } from "./views/allMemes.js";
import { showCreateMeme } from "./views/createMeme.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showMyProfile } from "./views/myProfile.js";
import { showRegister } from "./views/register.js";


showHome();
checkUserNav();

page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/createMeme', showCreateMeme);
page('/allMemes', showAllMemes);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/myProfile', showMyProfile);


page.start();


export function checkUserNav() {

    const userElement = document.querySelector('.user');
    const guestElement = document.querySelector('.guest');
    const welcomeElement = document.getElementById('welcomeName');

    let userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        userElement.style.display = 'block';
        guestElement.style.display = 'none';
        welcomeElement.textContent = `Welcome, ${userData.email}`;

    } else {
        userElement.style.display = 'none';
        guestElement.style.display = 'block';
        welcomeElement.textContent = '';
    }
}

let buttonLogout = document.getElementById('logoutBtn');
buttonLogout.addEventListener('click', onLogout);

function onLogout() {
    logout();
    checkUserNav();
    page.redirect('/home');
}