function search() {
 
   let townsList = document.querySelectorAll('#towns li');
   let search = document.querySelector('#searchText').value;
   let counterMaches = 0;
 
   for (let i = 0; i < townsList.length; i++) {
 
         townsList[i].style.fontWeight = 'normal';
         townsList[i].style.textDecoration = 'none';
 
      if (townsList[i].textContent.includes(search)) {
 
         townsList[i].style.fontWeight = 'bold';
         townsList[i].style.textDecoration = 'underline';
         counterMaches++;
      }
   }
 
   document.getElementById('result').textContent = `${counterMaches} matches found`;
}
