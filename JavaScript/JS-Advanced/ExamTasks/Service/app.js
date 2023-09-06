window.addEventListener('load', solve);

function solve() {
   
    let productTypeInput = document.getElementById('type-product');
    let descriptionInput = document.getElementById('description');
    let clientNameInput = document.getElementById('client-name');
    let clientPhoneInput = document.getElementById('client-phone');
    let buttonSendForm = document.querySelector('#right form button');

    let receivedOrdersElement = document.getElementById('received-orders');
    let completedOrdersElement = document.getElementById('completed-orders');
    let buttonClear = document.querySelector('.clear-btn');

    buttonSendForm.addEventListener('click', onSend);

    function onSend(event) {

        event.preventDefault();

        if (descriptionInput.value == '' || clientNameInput.value == '' || clientPhoneInput.value == '') {

            return;
        }

        let mainDivElement = document.createElement('div');
        mainDivElement.setAttribute('class', 'container');

        let productTypeElement = document.createElement('h2');
        productTypeElement.textContent = `Product type for repair: ${productTypeInput.value}`;

        let clientInfoElement = document.createElement('h3');
        clientInfoElement.textContent = `Client information: ${clientNameInput.value}, ${clientPhoneInput.value}`;

        let descriptionElement = document.createElement('h4');
        descriptionElement.textContent = `Description of the problem: ${descriptionInput.value}`;

        let buttonStartRepair = document.createElement('button');
        buttonStartRepair.setAttribute('class', 'start-btn');
        buttonStartRepair.textContent = 'Start repair';

        let buttonFinishRepair = document.createElement('button');
        buttonFinishRepair.setAttribute('class', 'finish-btn');
        buttonFinishRepair.textContent = 'Finish repair';
        buttonFinishRepair.disabled = true;

        mainDivElement.appendChild(productTypeElement);
        mainDivElement.appendChild(clientInfoElement);
        mainDivElement.appendChild(descriptionElement);
        mainDivElement.appendChild(buttonStartRepair);
        mainDivElement.appendChild(buttonFinishRepair);

        receivedOrdersElement.appendChild(mainDivElement);

        descriptionInput.value = '';
        clientNameInput.value = '';
        clientPhoneInput.value = '';

        buttonStartRepair.addEventListener('click', onStartRepair);

        function onStartRepair() {

            buttonStartRepair.disabled = true;
            buttonFinishRepair.disabled = false;
        }

        buttonFinishRepair.addEventListener('click', onFinishRepair);

        function onFinishRepair() {

            completedOrdersElement.appendChild(mainDivElement);
            buttonStartRepair.remove();
            buttonFinishRepair.remove();
        }
    }

    buttonClear.addEventListener('click', onClear);

    function onClear() {

        let containerArray = Array.from(document.querySelectorAll('#completed-orders .container'));

        containerArray.forEach((container) => container.remove());
    }
}