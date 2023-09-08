window.addEventListener('load', solve);

function solve() {
 
    let genreInput = document.getElementById('genre');
    let songNameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');
    let buttonAdd = document.getElementById('add-btn');
 
    let songCollectionElement = document.querySelector('.all-hits-container');
    let likesElement = document.querySelector('#total-likes .likes p');
    let savedSongElement = document.querySelector('.saved-container');
 
 
    buttonAdd.addEventListener('click', onAdd);
 
    function onAdd(event) {
 
        event.preventDefault();
 
        if (genreInput.value == '' || songNameInput.value == '' ||
            authorInput.value == '' || dateInput.value == '') {
 
            return;
        }
 
        let mainDivElement = document.createElement('div');
        mainDivElement.setAttribute('class', 'hits-info');
 
        let imageElement = document.createElement('img');
        imageElement.src = './static/img/img.png';
 
        let genreElement = document.createElement('h2');
        genreElement.textContent = `Genre: ${genreInput.value}`;
 
        let songNameElement = document.createElement('h2');
        songNameElement.textContent = `Name: ${songNameInput.value}`;
 
        let authorElement = document.createElement('h2');
        authorElement.textContent = `Author: ${authorInput.value}`;
 
        let dateElement = document.createElement('h3');
        dateElement.textContent = `Date: ${dateInput.value}`;
 
        let buttonSave = document.createElement('button');
        buttonSave.setAttribute('class', 'save-btn');
        buttonSave.textContent = 'Save song';
 
        let buttonLike = document.createElement('button');
        buttonLike.setAttribute('class', 'like-btn');
        buttonLike.textContent = 'Like song';
 
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('class', 'delete-btn');
        buttonDelete.textContent = 'Delete';
 
        mainDivElement.appendChild(imageElement);
        mainDivElement.appendChild(genreElement);
        mainDivElement.appendChild(songNameElement);
        mainDivElement.appendChild(authorElement);
        mainDivElement.appendChild(dateElement);
        mainDivElement.appendChild(buttonSave);
        mainDivElement.appendChild(buttonLike);
        mainDivElement.appendChild(buttonDelete);
 
        songCollectionElement.appendChild(mainDivElement);
 
        genreInput.value = '';
        songNameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
 
        buttonLike.addEventListener('click', onLike);
 
        function onLike() {
 
            let currentLikes = Number(likesElement.textContent.split(' ')[2]);
            currentLikes++;
 
            likesElement.textContent = `Total Likes: ${currentLikes}`;
 
            buttonLike.disabled = true;
        }
 
        buttonSave.addEventListener('click', onSave);
 
        function onSave() {
 
            savedSongElement.appendChild(mainDivElement);
 
            buttonLike.remove();
            buttonSave.remove();
        }
 
        buttonDelete.addEventListener('click', onDelete);
 
        function onDelete() {
 
            mainDivElement.remove();
 
            let currentLikes = Number(likesElement.textContent.split(' ')[2]);
            currentLikes--;
 
            likesElement.textContent = `Total Likes: ${currentLikes}`;
        }
    }
}