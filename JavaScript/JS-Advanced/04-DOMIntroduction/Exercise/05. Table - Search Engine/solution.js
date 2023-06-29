function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   function onClick() {
 
      let trList = document.querySelectorAll('tbody tr');
      let searchedElement = document.getElementById('searchField').value;
 
      for (let i = 0; i < trList.length; i++) {
 
         let currentRow = trList[i];
         
         currentRow.classList.remove('select');
         let currentData = currentRow.getElementsByTagName('td');
 
         for (let j = 0; j < currentData.length; j++) {
 
            let currentText = currentData[j];
 
            if (currentText.textContent.includes(searchedElement)) {
 
               currentRow.classList.add('select');
            }
         }
      }
   }
}