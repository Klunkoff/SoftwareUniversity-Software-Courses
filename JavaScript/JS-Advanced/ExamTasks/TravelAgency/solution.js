window.addEventListener('load', solution);

function solution() {
 
  let fullNameInput = document.getElementById('fname');
  let emailInput = document.getElementById('email');
  let phoneNumberInput = document.getElementById('phone');
  let addresInput = document.getElementById('address');
  let postalCodeInput = document.getElementById('code');

  let buttonSubmit = document.getElementById('submitBTN');
  let buttonEdit = document.getElementById('editBTN');
  let buttonContinue = document.getElementById('continueBTN');

  let infoPreviewElement = document.getElementById('infoPreview');
  let blockElement = document.getElementById('block');

  buttonSubmit.addEventListener('click', onSubmit);

  function onSubmit(event) {

      event.preventDefault();

      if (fullNameInput.value == '' || emailInput.value == '') {
          return;
      }

      let fullNameElement = document.createElement('li');
      fullNameElement.textContent = `Full Name: ${fullNameInput.value}`;

      let emailElement = document.createElement('li');
      emailElement.textContent = `Email: ${emailInput.value}`;

      let phoneNumberElement = document.createElement('li');
      phoneNumberElement.textContent = `Phone Number: ${phoneNumberInput.value}`;

      let addresslElement = document.createElement('li');
      addresslElement.textContent = `Address: ${addresInput.value}`;

      let postalElement = document.createElement('li');
      postalElement.textContent = `Postal Code: ${postalCodeInput.value}`;

      infoPreviewElement.appendChild(fullNameElement);
      infoPreviewElement.appendChild(emailElement);
      infoPreviewElement.appendChild(phoneNumberElement);
      infoPreviewElement.appendChild(addresslElement);
      infoPreviewElement.appendChild(postalElement);

      editName = fullNameInput.value;
      editEmail = emailInput.value;
      editPhone = phoneNumberInput.value;
      editAddress = addresInput.value;
      editPostal = postalCodeInput.value;

      fullNameInput.value = '';
      emailInput.value = '';
      phoneNumberInput.value = '';
      addresInput.value = '';
      postalCodeInput.value = '';

      buttonSubmit.disabled = true;
      buttonEdit.disabled = false;
      buttonContinue.disabled = false;

      buttonEdit.addEventListener('click', onEdit);
      buttonContinue.addEventListener('click', onContinue)

      function onEdit() {

          fullNameInput.value = editName;
          emailInput.value = editEmail;
          phoneNumberInput.value = editPhone;
          addresInput.value = editAddress;
          postalCodeInput.value = editPostal;

          infoPreviewElement.innerHTML = '';

          buttonSubmit.disabled = false;
          buttonEdit.disabled = true;
          buttonContinue.disabled = true;
      }

      function onContinue() {

          let reservationCompleteElement = document.createElement('h3');
          reservationCompleteElement.textContent = 'Thank you for your reservation!';

          blockElement.innerHTML = '';
          blockElement.appendChild(reservationCompleteElement);
      }
  }
}
