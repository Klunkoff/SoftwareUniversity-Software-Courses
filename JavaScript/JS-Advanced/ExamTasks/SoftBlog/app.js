function solve() {

    let authorInput = document.getElementById('creator');
    let titleInput = document.getElementById('title');
    let categoryInput = document.getElementById('category');
    let contentInput = document.getElementById('content');

    let buttonCreate = document.querySelector('.create');

    let postsSectionElement = document.querySelector('.site-content section');
    let archiveSectionElement = document.querySelector('.archive-section ol');

    buttonCreate.addEventListener('click', onCreate);

    function onCreate(event) {

        event.preventDefault();

        let articleElement = document.createElement('article');

        articleElement.innerHTML = `<h1>${titleInput.value}</h1>
      <p>Category: <strong>${categoryInput.value}</strong></p>
      <p>Creator: <strong>${authorInput.value}</strong></p>
      <p>${contentInput.value}</p>
      <div class="buttons">
      <button class="btn delete">Delete</button>
      <button class="btn archive">Archive</button>
      </div>`;

        articleElement.addEventListener('click', onDeleteOrArchive);

        postsSectionElement.appendChild(articleElement);

        authorInput.value = '';
        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';
    }

    function onDeleteOrArchive(event) {

        if (event.target.textContent == 'Delete') {
            event.currentTarget.remove();

        } else if (event.target.textContent == 'Archive') {
            onArchive(event);
        }
    }

    function onArchive(event) {

        let title = event.currentTarget.children[0];

        let titleElement = document.createElement('li');
        titleElement.textContent = title.textContent;

        event.currentTarget.remove();

        archiveSectionElement.appendChild(titleElement);

        let allTitlesSorted = Array.from(archiveSectionElement.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent));

        archiveSectionElement.innerHTML = '';

        for (let i = 0; i < allTitlesSorted.length; i++) {
            archiveSectionElement.appendChild(allTitlesSorted[i]);
        }
    }
}
