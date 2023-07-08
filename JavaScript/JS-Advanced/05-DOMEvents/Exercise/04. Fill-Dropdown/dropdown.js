function addItem() {
   
    let parentElement = document.getElementById('menu');

    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = inputText.value;
    newOptionElement.value = inputValue.value;

    parentElement.appendChild(newOptionElement);

    inputText.value = '';
    inputValue.value = '';
}