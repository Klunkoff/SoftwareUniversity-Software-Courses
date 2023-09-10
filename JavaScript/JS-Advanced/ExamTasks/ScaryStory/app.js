window.addEventListener("load", solve);

function solve() {
 
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let genreInput = document.getElementById('genre');
  let storyInput = document.getElementById('story');
  let buttonPublish = document.getElementById('form-btn');
 
  let previewListElement = document.getElementById('preview-list');
 
  buttonPublish.addEventListener('click', onPublish);
 
  function onPublish(event) {
 
    event.preventDefault();
 
    if (firstNameInput.value == '' || lastNameInput.value == '' ||
     ageInput.value == '' || storyTitleInput.value == '' || storyInput.value == '') {
 
      return;
    }
 
    let liPreviewListElement = document.createElement('li');
    liPreviewListElement.setAttribute('class', 'story-info');
 
    let articleElement = document.createElement('article');
 
    let nameElement = document.createElement('h4');
    nameElement.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
 
    let ageElement = document.createElement('p');
    ageElement.textContent = `Age: ${ageInput.value}`;
 
    let titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${storyTitleInput.value}`;
 
    let genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${genreInput.value}`;
 
    let storyElement = document.createElement('p');
    storyElement.textContent = `${storyInput.value}`;
 
    let buttonSave = document.createElement('button');
    buttonSave.setAttribute('class', 'save-btn');
    buttonSave.textContent = 'Save Story';
 
    let buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('class', 'edit-btn');
    buttonEdit.textContent = 'Edit Story';
 
    let buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('class', 'delete-btn');
    buttonDelete.textContent = 'Delete Story';
 
    articleElement.appendChild(nameElement);
    articleElement.appendChild(ageElement);
    articleElement.appendChild(titleElement);
    articleElement.appendChild(genreElement);
    articleElement.appendChild(storyElement);
 
    liPreviewListElement.appendChild(articleElement);
    liPreviewListElement.appendChild(buttonSave);
    liPreviewListElement.appendChild(buttonEdit);
    liPreviewListElement.appendChild(buttonDelete);
 
    previewListElement.appendChild(liPreviewListElement);
 
    let editFirstName = firstNameInput.value;
    let editLastName = lastNameInput.value;
    let editAge = ageInput.value;
    let editStoryTitle = storyTitleInput.value;
    let editGenre = genreInput.value;
    let editStory = storyInput.value;
 
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    genreInput.value = '';
    storyInput.value = '';
 
    buttonPublish.disabled = true;
 
 
    buttonEdit.addEventListener('click', onEdit);
 
    function onEdit() {
 
      firstNameInput.value = editFirstName;
      lastNameInput.value = editLastName;
      ageInput.value = editAge;
      storyTitleInput.value = editStoryTitle;
      genreInput.value = editGenre;
      storyInput.value = editStory;
      
      liPreviewListElement.remove();
      
      buttonPublish.disabled = false;
    }
 
    buttonSave.addEventListener('click', onSave);
 
    function onSave() {
 
      let mainDiv = document.getElementById('main');
 
      let firstChildDiv = document.querySelector('.form-wrapper');
      let secondChildDiv = document.getElementById('side-wrapper');
      mainDiv.removeChild(firstChildDiv);
      mainDiv.removeChild(secondChildDiv);
 
      let savedStoryMessage = document.createElement('h1');
      savedStoryMessage.textContent = 'Your scary story is saved!';
 
      mainDiv.appendChild(savedStoryMessage);
    }
 
    buttonDelete.addEventListener('click', onDelete);
 
    function onDelete() {
 
      liPreviewListElement.remove();
 
      buttonPublish.disabled = false;
 
    }
  }
}
