import page from "./node_modules/page/page.mjs";
import { showLogin } from "./views/login.js";
import { logout } from "./data.js";
import { showRegister } from "./views/register.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showCreateCar } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showMyCars } from "./views/myCars.js";
import { showSearch } from "./views/search.js";



showHome();
checkUserNav();

page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/my-cars', showMyCars);
page('/create', showCreateCar);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);


page.start();


export function checkUserNav() {

    const userElement = document.getElementById('profile');
    const guestElement = document.getElementById('guest');
    const welcomeElement = document.getElementById('welcome')

    let userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        userElement.style.display = 'inline-block';
        guestElement.style.display = 'none';
        welcomeElement.textContent = `Welcome ${userData.username}`;

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
    page.redirect('/home');
}