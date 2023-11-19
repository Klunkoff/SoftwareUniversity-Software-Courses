import { logout } from "./data.js";
import page from "./node_modules/page/page.mjs";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showMyFurniture } from "./views/my-furniture.js";
import { showRegister } from "./views/register.js";

checkUserNav();

page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/my-furniture', showMyFurniture);

page.start();


export function checkUserNav() {

    const userElement = document.getElementById('user');
    const guestElement = document.getElementById('guest');

    let userData = localStorage.getItem('user');

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
    page.redirect('/catalog');
}
