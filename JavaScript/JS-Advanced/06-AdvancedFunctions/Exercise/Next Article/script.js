function getArticleGenerator(articles) {

    let contentDiv = document.getElementById('content');

    let showNextArticle = () => {

        if (articles.length !== 0) {

            let articleElement = document.createElement('article');
            contentDiv.appendChild(articleElement);
            
            let outputArticle = document.querySelector('#content').lastChild;
            let currentArticle = articles.shift();
            outputArticle.textContent = currentArticle;
        }
    }

    return showNextArticle;
}
