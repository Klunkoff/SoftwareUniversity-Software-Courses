function notify(message) {

  let notificationID = document.getElementById('notification');
  notificationID.textContent = message;
  notificationID.style.display = 'block';

  if (notificationID.style.display == 'block') {
    notificationID.addEventListener('click', hideMessage);
  }

  function hideMessage() {
    notificationID.style.display = 'none';
  }
}