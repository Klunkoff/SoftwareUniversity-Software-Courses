function addItem() {
 
    let inputElement = document.getElementById('newItemText');
    let parentElement = document.getElementById('items');
    let newLiElement = document.createElement('li');
    
    newLiElement.textContent = inputElement.value;
    parentElement.appendChild(newLiElement);
    inputElement.value = '';
}