function addItem() {

    let ulElementItems = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    inputElement.value = '';

    let newAElement = document.createElement('a');
    newAElement.href = '#';
    newAElement.textContent = '[Delete]';
    newAElement.addEventListener('click', deleteItems);

    newLiElement.appendChild(newAElement);
    ulElementItems.appendChild(newLiElement);

    function deleteItems(event) {

        event.target.parentNode.remove();
    }
}