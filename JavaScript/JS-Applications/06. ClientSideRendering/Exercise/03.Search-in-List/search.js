
import { matchesView } from "./views.js";

const searchInput = document.getElementById('searchText');

export function search() {

   let counter = 0;

   let searchedString = searchInput.value;
   let liElementsArray = Array.from(document.querySelectorAll('li'));
   liElementsArray.forEach((element) => {

      let elementText = element.textContent;

      if (searchedString == '') {
         return;
      }

      if (elementText.includes(searchedString)) {
         element.setAttribute('class', 'active');
         counter++;
      }
   });
   
   matchesView(counter);
   searchInput.value = '';
}




