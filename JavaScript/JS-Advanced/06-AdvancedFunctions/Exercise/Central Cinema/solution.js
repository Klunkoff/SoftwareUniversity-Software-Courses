function solve() {

    let addMovieElementArray = Array.from(document.getElementById('container').children);

    let nameInput = addMovieElementArray[0];
    let hallInput = addMovieElementArray[1];
    let ticketPriceInput = addMovieElementArray[2];
    let buttonOnScreen = addMovieElementArray[3];

    let moviesOnScreenElement = document.querySelector('#movies ul');
    let archiveElement = document.querySelector('#archive ul');
    let buttonClear = document.querySelector('#archive button');


    buttonOnScreen.addEventListener('click', onScreen);

    function onScreen(event) {

        event.preventDefault();

        if (!Number(ticketPriceInput.value) || ticketPriceInput.value == '' ||
            nameInput.value == '' || hallInput.value == '') {

            return;
        }

        let mainLiElement = document.createElement('li');

        let movieNameElement = document.createElement('span');
        movieNameElement.textContent = nameInput.value;

        let hallElement = document.createElement('strong');
        hallElement.textContent = `Hall: ${hallInput.value}`;

        let divElement = document.createElement('div');

        let priceElement = document.createElement('strong');
        priceElement.textContent = Number(ticketPriceInput.value).toFixed(2);

        let inputElement = document.createElement('input');
        inputElement.placeholder = 'Tickets Sold';

        let buttonArhive = document.createElement('button');
        buttonArhive.textContent = 'Archive';

        divElement.appendChild(priceElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(buttonArhive);

        mainLiElement.appendChild(movieNameElement);
        mainLiElement.appendChild(hallElement);
        mainLiElement.appendChild(divElement);

        moviesOnScreenElement.appendChild(mainLiElement);

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

        buttonArhive.addEventListener('click', onArchive);

        function onArchive(event) {

            event.preventDefault();

            if (isNaN(Number(inputElement.value)) || inputElement.value == '') {

                return;
            }

            let archiveLiElement = document.createElement('li');
            archiveLiElement.appendChild(movieNameElement);

            let totalAmountElement = document.createElement('strong');

            let currentPrice = Number(priceElement.textContent);
            let currentTicketsNum = Number(inputElement.value);
            totalAmountElement.textContent = `Total amount: ${(currentPrice * currentTicketsNum).toFixed(2)}`;

            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';

            archiveLiElement.appendChild(totalAmountElement);
            archiveLiElement.appendChild(buttonDelete);

            archiveElement.appendChild(archiveLiElement);

            mainLiElement.remove();

            buttonDelete.addEventListener('click', onDelete);

            function onDelete() {

                archiveLiElement.remove();
            }
        }
    }

    buttonClear.addEventListener('click', onClear);

    function onClear() {

        let allLiElements = Array.from(document.querySelectorAll('#archive li'));
        allLiElements.forEach((element) => element.remove());
    }
}