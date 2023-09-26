window.addEventListener("load", solve);

function solve() {

  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let genderInput = document.getElementById('genderSelect');
  let dishInfoInput = document.getElementById('task');
  let buttonSubmit = document.getElementById('form-btn');
  let buttonClear = document.getElementById('clear-btn');

  let inProgressElement = document.getElementById('in-progress');
  let progressCounterElement = document.getElementById('progress-count');
  let finishedElement = document.getElementById('finished');

  buttonSubmit.addEventListener('click', onSubmit);

  function onSubmit(event) {

    event.preventDefault();

    if (firstNameInput.value == '' || lastNameInput.value == '' ||
      ageInput.value == '' || dishInfoInput.value == '') {

      return;
    }

    let liInProgresElement = document.createElement('li');
    liInProgresElement.setAttribute('class', 'each-line');

    let articleElement = document.createElement('article');

    let nameElement = document.createElement('h4');
    nameElement.textContent = `${firstNameInput.value} ${lastNameInput.value}`;

    let genderAgesElement = document.createElement('p');
    genderAgesElement.textContent = `${genderInput.value}, ${ageInput.value}`;

    let dishDescriptionElement = document.createElement('p');
    dishDescriptionElement.textContent = `Dish description: ${dishInfoInput.value}`;

    let buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('class', 'edit-btn');
    buttonEdit.textContent = 'Edit';

    let buttonComplete = document.createElement('button');
    buttonComplete.setAttribute('class', 'complete-btn');
    buttonComplete.textContent = 'Mark as complete';

    articleElement.appendChild(nameElement);
    articleElement.appendChild(genderAgesElement);
    articleElement.appendChild(dishDescriptionElement);

    liInProgresElement.appendChild(articleElement);
    liInProgresElement.appendChild(buttonEdit);
    liInProgresElement.appendChild(buttonComplete);

    inProgressElement.appendChild(liInProgresElement);

    let counter = Number(progressCounterElement.textContent);
    progressCounterElement.textContent = counter + 1;

    let editFirstName = firstNameInput.value;
    let editLastName = lastNameInput.value;
    let editAge = ageInput.value;
    let editGender = genderInput.value;
    let editDishInfo = dishInfoInput.value;

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    genderInput.value = '';
    dishInfoInput.value = '';

    buttonEdit.addEventListener('click', onEdit);

    function onEdit() {

      firstNameInput.value = editFirstName;
      lastNameInput.value = editLastName;
      ageInput.value = editAge;
      genderInput.value = editGender;
      dishInfoInput.value = editDishInfo;

      liInProgresElement.remove();

      let counter = Number(progressCounterElement.textContent);
      progressCounterElement.textContent = counter - 1;
    }

    buttonComplete.addEventListener('click', onComplete);

    function onComplete() {

      buttonEdit.remove();
      buttonComplete.remove(); 
      
      finishedElement.appendChild(liInProgresElement);

      let counter = Number(progressCounterElement.textContent);
      progressCounterElement.textContent = counter - 1;
    }

    buttonClear.addEventListener('click', onClear);

    function onClear(){

      let liArray = Array.from(document.querySelectorAll('#finished li'));

      liArray.forEach((el) => el.remove());
    }
  }
}
