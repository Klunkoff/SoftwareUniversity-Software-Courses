function create(words) {

   let mainDiv = document.getElementById('content');

   for (let word of words) {

      let currentDiv = document.createElement('div');
      currentDiv.addEventListener('click', showParagraph);

      let currentParagraph = document.createElement('p');
      currentParagraph.textContent = word;
      currentParagraph.style.display = 'none';

      currentDiv.appendChild(currentParagraph);
      mainDiv.appendChild(currentDiv);
   }

   function showParagraph(event) {
      event.target.children[0].style.display = 'inline-block';
   }
}