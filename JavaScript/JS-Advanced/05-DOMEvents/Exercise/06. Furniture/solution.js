function solve() {

  let buttons = document.querySelectorAll('button');
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  let textAreas = document.querySelectorAll('textarea');
  let generateTextArea = textAreas[0];
  let buyTextArea = textAreas[1];

  let tableBodyElement = document.querySelector('tbody');

  function generate() {

    let furnitureInputArray = JSON.parse(generateTextArea.value);

    for (let furniture of furnitureInputArray) {

      let tableRowElement = document.createElement('tr');

      let tdImage = document.createElement('td');
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdFactor = document.createElement('td');
      let tdMark = document.createElement('td');

      tableRowElement.appendChild(tdImage);
      tableRowElement.appendChild(tdName);
      tableRowElement.appendChild(tdPrice);
      tableRowElement.appendChild(tdFactor);
      tableRowElement.appendChild(tdMark);

      let image = document.createElement('img');
      image.src = furniture.img;
      tdImage.appendChild(image);

      tdName.textContent = furniture.name;
      tdPrice.textContent = furniture.price;
      tdFactor.textContent = furniture.decFactor;

      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';

      tdMark.appendChild(checkBox);

      tableBodyElement.appendChild(tableRowElement);
    }
  }

  function buy() {

    let allBoxesArray = Array.from(document.querySelectorAll('input'));

    let productNameArray = [];
    let priceArray = [];
    let decorationFactorArray = [];

    for (let box of allBoxesArray) {

      if (box.checked) {

        let parentElement = box.parentElement.parentElement;

        let currentProductName = parentElement.children[1].textContent;
        productNameArray.push(currentProductName);
        
        let currentProductPrice = Number(parentElement.children[2].textContent);
        priceArray.push(currentProductPrice);

        let currentDecorationFactor = Number(parentElement.children[3].textContent);
        decorationFactorArray.push(currentDecorationFactor);
      }
    }

    let totalPrice = 0;
    priceArray.forEach((el) => totalPrice += el);

    let allDecorationFactor = 0;
    decorationFactorArray.forEach((el) => allDecorationFactor += el);
    let averageDecorationfactor = allDecorationFactor / decorationFactorArray.length;

    let result = [];

    let boughtFurniture = `Bought furniture: ${productNameArray.join(', ')}`;
    result.push(boughtFurniture);

    let resultPrice = `Total price: ${totalPrice.toFixed(2)}`;
    result.push(resultPrice);
    
    let averageDec = `Average decoration factor: ${averageDecorationfactor}`;
    result.push(averageDec);

    buyTextArea.value = result.join('\n');
  }
}