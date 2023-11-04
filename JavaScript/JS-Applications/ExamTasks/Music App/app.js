import page from "./node_modules/page/page.mjs";
import { showLogin } from "./views/login.js";
import { logout } from "./data.js";
import { showRegister } from "./views/register.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showCreateAlbum } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showSearch } from "./views/search.js";


showHome();
checkUserNav();

page('/login', showLogin);
page('/register', showRegister);
page('/home', showHome);
page('/catalog', showCatalog);
page('/create', showCreateAlbum);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);


page.start();


export function checkUserNav() {

    const usersElement = Array.from(document.querySelectorAll('.user'));
    const guestsElement = Array.from(document.querySelectorAll('.guest'));
    
    let userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        usersElement.forEach((el) => el.style.display = 'inline-block')
        guestsElement.forEach((el) => el.style.display = 'none')
        
    } else {
        usersElement.forEach((el) => el.style.display = 'none')
        guestsElement.forEach((el) => el.style.display = 'inline-block')
    }
}

let buttonLogout = document.getElementById('logoutBtn');
buttonLogout.addEventListener('click', onLogout);

function onLogout() {
    logout();
    checkUserNav();
    page.redirect('/home');
}