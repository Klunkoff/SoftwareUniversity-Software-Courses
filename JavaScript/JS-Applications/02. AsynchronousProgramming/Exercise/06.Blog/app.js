function attachEvents() {
 
    let buttonLoadPosts = document.getElementById('btnLoadPosts');
    let selectPostsElement = document.getElementById('posts');
    let buttonView = document.getElementById('btnViewPost');
    let postTitleElement = document.getElementById('post-title');
    let postBodyElement = document.getElementById('post-body');
    let postCommentsElement = document.getElementById('post-comments');
 
    buttonLoadPosts.addEventListener('click', onLoadPosts);
 
    function onLoadPosts() {
 
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(response => response.json())
            .then(getPosts)
            .catch();
 
        function getPosts(dataPost) {
 
            for (let objectKey in dataPost) {
 
                let optionElement = document.createElement('option');
                optionElement.setAttribute('value', objectKey);
                optionElement.textContent = dataPost[objectKey].title;
 
                selectPostsElement.appendChild(optionElement);
            }
 
            buttonView.addEventListener('click', onView);
 
            function onView() {
 
                let selectedPost = Array.from(selectPostsElement.children).find((el) => el.selected == true);
 
                fetch(`http://localhost:3030/jsonstore/blog/comments`)
                    .then(response => response.json())
                    .then(getComments)
                    .catch();
 
                function getComments(dataComment) {
 
                    postTitleElement.textContent = selectedPost.textContent;
                    postBodyElement.textContent = dataPost[selectedPost.value].body;
 
                    postCommentsElement.innerHTML = '';
 
                    for (let commentKey in dataComment) {
 
                        if (dataComment[commentKey].postId == selectedPost.value) {
 
                            let postElement = document.createElement('li');
                            postElement.textContent = dataComment[commentKey].text;
 
                            postCommentsElement.appendChild(postElement);
                        }
                    }
                }
            }
        }
    }
}
 
attachEvents();