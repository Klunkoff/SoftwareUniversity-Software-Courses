const errorBoxElement = document.getElementById('errorBox');
const spanElement = errorBoxElement.querySelector('span');

export function notificationAlert(message) {

    spanElement.textContent = message;
    errorBoxElement.style.display = 'block';

    setTimeout( () => errorBoxElement.style.display = 'none', 3000);
}