window.addEventListener("load", solve);

function solve() {

    let titleInput = document.getElementById('post-title');
    let categoryInput = document.getElementById('post-category');
    let contentInput = document.getElementById('post-content');
    let buttonPublish = document.getElementById('publish-btn');

    let postReviewElement = document.getElementById('review-list');
    let uploadedPostsElement = document.getElementById('published-list');
    let buttonClear = document.getElementById('clear-btn');

    buttonPublish.addEventListener('click', onPublish);

    function onPublish(event) {

        event.preventDefault();

        if (titleInput.value == '' || categoryInput.value == ''
            || contentInput.value == '') {

            return;
        }

        let mainLiElement = document.createElement('li');
        mainLiElement.setAttribute('class', 'rpost');

        let articleElement = document.createElement('article');

        let headerTitleElement = document.createElement('h4');
        headerTitleElement.textContent = titleInput.value;

        let categoryElement = document.createElement('p');
        categoryElement.textContent = `Category: ${categoryInput.value}`;

        let contentElement = document.createElement('p');
        contentElement.textContent = `Content: ${contentInput.value}`;

        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'action-btn edit');
        buttonEdit.textContent = 'Edit';

        let buttonApprove = document.createElement('button');
        buttonApprove.setAttribute('class', 'action-btn approve');
        buttonApprove.textContent = 'Approve';

        articleElement.appendChild(headerTitleElement);
        articleElement.appendChild(categoryElement);
        articleElement.appendChild(contentElement);

        mainLiElement.appendChild(articleElement);
        mainLiElement.appendChild(buttonApprove);
        mainLiElement.appendChild(buttonEdit);

        postReviewElement.appendChild(mainLiElement);

        let editTitle = titleInput.value;
        let editCategory = categoryInput.value;
        let editContent = contentInput.value;

        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';

        buttonEdit.addEventListener('click', onEdit);

        function onEdit() {

            titleInput.value = editTitle;
            categoryInput.value = editCategory;
            contentInput.value = editContent;

            mainLiElement.remove();
        }

        buttonApprove.addEventListener('click', onApprove);

        function onApprove() {

            buttonApprove.remove();
            buttonEdit.remove();
            uploadedPostsElement.appendChild(mainLiElement);
        }

        buttonClear.addEventListener('click', onClear);

        function onClear() {

            let uploadedPostsArray = Array.from(document.querySelectorAll('#published-list li'));
            uploadedPostsArray.forEach((el) => el.remove());
        }
    }
}
