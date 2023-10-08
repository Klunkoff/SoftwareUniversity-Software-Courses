function solution() {
 
    let mainSection = document.getElementById('main');
 
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(onData)
        .catch();
 
    function onData(data) {
 
        data.forEach((el) => {
 
            let divAccordion = document.createElement('div');
            divAccordion.setAttribute('class', 'accordion');
 
            let divHead = document.createElement('div');
            divHead.setAttribute('class', 'head');
 
            let spanTitle = document.createElement('span');
            spanTitle.textContent = el.title;
 
            let buttonMoreLess = document.createElement('button');
            buttonMoreLess.setAttribute('class', 'button');
            buttonMoreLess.id = el._id;
            buttonMoreLess.textContent = 'More';
            buttonMoreLess.addEventListener('click', onClick);
 
            let divExtra = document.createElement('div');
            divExtra.setAttribute('class', 'extra');
 
            let pContent = document.createElement('p');
 
            divExtra.appendChild(pContent);
 
            divHead.appendChild(spanTitle);
            divHead.appendChild(buttonMoreLess);
 
            divAccordion.appendChild(divHead);
            divAccordion.appendChild(divExtra);
 
            mainSection.appendChild(divAccordion);
        });
    }
 
    function onClick(event) {
 
        let contentElement = event.target.parentElement.nextElementSibling.children[0];
 
        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${event.target.id}`)
            .then(response => response.json())
            .then(additionalData)
            .catch();
 
        function additionalData(data) {
 
            if (event.target.textContent == 'More') {
 
                contentElement.textContent = data.content;
                event.target.textContent = 'Less';
                event.target.parentElement.nextElementSibling.style.display = 'block';
 
            } else if (event.target.textContent == 'Less') {
 
                event.target.textContent = 'More';
                event.target.parentElement.nextElementSibling.style.display = 'none';
            }
        }
    }
}
 
solution();