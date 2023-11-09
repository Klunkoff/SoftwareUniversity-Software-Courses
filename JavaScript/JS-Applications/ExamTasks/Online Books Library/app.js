import { logout } from "./data.js";
import page from "./node_modules/page/page.mjs";
import { showAddBook } from "./views/addBook.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEditBook } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showMyBooks } from "./views/myBooks.js";
import { showRegister } from "./views/register.js";


showDashboard();
checkUserNav();

page('/dashboard', showDashboard);
page('/login', showLogin);
page('/register', showRegister);
page('/add-book', showAddBook);
page('/details/:id', showDetails);
page('/edit/:id', showEditBook);
page('/my-books', showMyBooks);

page.start();


export function checkUserNav() {

    const userElement = document.getElementById('user');
    const guestElement = document.getElementById('guest');
    const emailElement = userElement.querySelector('span');

    let userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        userElement.style.display = 'inline-block';
        guestElement.style.display = 'none';
        emailElement.textContent = `Welcome, ${userData.email}`;

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
