window.addEventListener('load', solve);

function solve() {
 
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let buttonAdd = document.getElementById('add');
 
    let tbodyElement = document.getElementById('furniture-list');
    let totalPriceElement = document.querySelector('.total-price');
 
 
    buttonAdd.addEventListener('click', onAdd);
 
    function onAdd(event) {
 
        event.preventDefault();
 
        let yearToNumber = Number(yearInput.value);
        let priceToNumber = Number(priceInput.value);
 
        if (modelInput.value == '' || descriptionInput.value == '' ||
            yearToNumber <= 0 || priceToNumber <= 0) {
 
            return;
        }
 
        // tr class Info
 
        let trInfoElement = document.createElement('tr');
        trInfoElement.setAttribute('class', 'info');
 
        let tdModelElement = document.createElement('td');
        tdModelElement.textContent = modelInput.value;
 
        let tdPriceElement = document.createElement('td');
        tdPriceElement.textContent = priceToNumber.toFixed(2);
 
        let tdButtonsElement = document.createElement('td');
 
        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.setAttribute('class', 'moreBtn');
        buttonMoreInfo.textContent = 'More Info';
 
        let buttonBuyIt = document.createElement('button');
        buttonBuyIt.setAttribute('class', 'buyBtn');
        buttonBuyIt.textContent = 'Buy it';
 
        tdButtonsElement.appendChild(buttonMoreInfo);
        tdButtonsElement.appendChild(buttonBuyIt);
 
        trInfoElement.appendChild(tdModelElement);
        trInfoElement.appendChild(tdPriceElement);
        trInfoElement.appendChild(tdButtonsElement);
 
        tbodyElement.appendChild(trInfoElement);
 
        // tr class hide
 
        let trHideElement = document.createElement('tr');
        trHideElement.setAttribute('class', 'hide');
 
        let tdYearElement = document.createElement('td');
        tdYearElement.textContent = `Year: ${yearInput.value}`;
 
        let tdDescriptionElement = document.createElement('td');
        tdDescriptionElement.setAttribute('colspan', '3');
        tdDescriptionElement.textContent = `Description: ${descriptionInput.value}`;
 
        trHideElement.appendChild(tdYearElement);
        trHideElement.appendChild(tdDescriptionElement);
 
        tbodyElement.appendChild(trHideElement);
 
        //------------
 
        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
 
 
        buttonMoreInfo.addEventListener('click', onMoreInfo);
 
        function onMoreInfo() {
 
            if (buttonMoreInfo.textContent == 'More Info') {
 
                buttonMoreInfo.textContent = 'Less Info';
                trHideElement.style.display = 'contents';
 
            } else if (buttonMoreInfo.textContent == 'Less Info') {
 
                buttonMoreInfo.textContent = 'More Info';
                trHideElement.style.display = 'none';
            }
        }
 
 
        buttonBuyIt.addEventListener('click', onBuy);
        
        function onBuy() {
 
            let currentPrice = Number(tdPriceElement.textContent);
            let totalPrice = Number(totalPriceElement.textContent);
            totalPrice += currentPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
 
            trInfoElement.remove();
            trHideElement.remove();
        }
    }
}