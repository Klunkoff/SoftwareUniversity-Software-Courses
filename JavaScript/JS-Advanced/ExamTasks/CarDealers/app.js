window.addEventListener("load", solve);

function solve() {

    let makeInput = document.getElementById('make');
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let fuelTypeInput = document.getElementById('fuel');
    let originalCostInput = document.getElementById('original-cost');
    let sellingPriceInput = document.getElementById('selling-price');
    let buttonPublish = document.getElementById('publish');

    let tableBodyElement = document.getElementById('table-body');
    let carListElement = document.getElementById('cars-list');
    let profitElement = document.getElementById('profit');

    buttonPublish.addEventListener('click', onPublish);

    function onPublish(event) {

        event.preventDefault();

        if (makeInput.value == '' || modelInput.value == '' || yearInput.value == ''
            || fuelTypeInput.value == '' || originalCostInput.value == ''
            || sellingPriceInput.value == '') {

            return;
        }

        if (originalCostInput.value > sellingPriceInput.value) {
            return;
        }

        let tableRowElement = document.createElement('tr');
        tableRowElement.setAttribute('class', 'row');

        let makeTd = document.createElement('td');
        makeTd.textContent = makeInput.value;
        
        let modelTd = document.createElement('td');
        modelTd.textContent = modelInput.value;

        let yearTd = document.createElement('td');
        yearTd.textContent = yearInput.value;

        let fuelTd = document.createElement('td');
        fuelTd.textContent = fuelTypeInput.value;

        let originalCostTd = document.createElement('td');
        originalCostTd.textContent = originalCostInput.value;

        let sellingPriceTd = document.createElement('td');
        sellingPriceTd.textContent = sellingPriceInput.value;

        let buttonsTd = document.createElement('td');

        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'action-btn edit');
        buttonEdit.textContent = 'Edit';

        let buttonSell = document.createElement('button');
        buttonSell.setAttribute('class', 'action-btn sell')
        buttonSell.textContent = 'Sell';

        buttonsTd.appendChild(buttonEdit);
        buttonsTd.appendChild(buttonSell);

        tableRowElement.appendChild(makeTd);
        tableRowElement.appendChild(modelTd);
        tableRowElement.appendChild(yearTd);
        tableRowElement.appendChild(fuelTd);
        tableRowElement.appendChild(originalCostTd);
        tableRowElement.appendChild(sellingPriceTd);
        tableRowElement.appendChild(buttonsTd);

        tableBodyElement.appendChild(tableRowElement);

        let editMake = makeInput.value;
        let editModel = modelInput.value;
        let editYear = yearInput.value;
        let editFuel = fuelTypeInput.value;
        let editOriginalCost = originalCostInput.value;
        let editSellingPrice = sellingPriceInput.value;

        makeInput.value = '';
        modelInput.value = '';
        yearInput.value = '';
        fuelTypeInput.value = '';
        originalCostInput.value = '';
        sellingPriceInput.value = '';

        buttonEdit.addEventListener('click', onEdit);

        function onEdit() {

            makeInput.value = editMake;
            modelInput.value = editModel;
            yearInput.value = editYear;
            fuelTypeInput.value = editFuel;
            originalCostInput.value = editOriginalCost;
            sellingPriceInput.value = editSellingPrice;

            tableRowElement.remove();
        }

        buttonSell.addEventListener('click', onSell);

        function onSell() {

            let listElement = document.createElement('li');
            listElement.setAttribute('class', 'each-list');

            let carSpanElement = document.createElement('span');
            carSpanElement.textContent = `${makeTd.textContent} ${modelTd.textContent}`;

            let yearSpanElement = document.createElement('span');
            yearSpanElement.textContent = yearTd.textContent;

            let differenceProfit = Number(sellingPriceTd.textContent) - Number(originalCostTd.textContent);

            let differenceSpanElement = document.createElement('span');
            differenceSpanElement.textContent = differenceProfit;

            listElement.appendChild(carSpanElement);
            listElement.appendChild(yearSpanElement);
            listElement.appendChild(differenceSpanElement);

            carListElement.appendChild(listElement);

            tableRowElement.remove();

            let totalProfit = Number(profitElement.textContent);
            totalProfit += differenceProfit;
            profitElement.textContent = totalProfit.toFixed(2);
        }
    }
}
