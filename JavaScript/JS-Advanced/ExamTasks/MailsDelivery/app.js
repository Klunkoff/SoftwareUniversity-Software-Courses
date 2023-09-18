function solve() {

    let recipientNameInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messageInput = document.getElementById('message');
    let buttonAdd = document.getElementById('add');
    let buttonReset = document.getElementById('reset');

    let listOfMailsElement = document.getElementById('list');
    let sentMailsElement = document.querySelector('.sent-list');
    let deletedMailsElement = document.querySelector('.delete-list');

    buttonAdd.addEventListener('click', onAdd);

    function onAdd(event) {

        event.preventDefault();

        if (recipientNameInput.value == '' || titleInput.value == '' || messageInput.value == '') {

            return;
        }

        let mainLiElement = document.createElement('li');

        let titleElement = document.createElement('h4');
        titleElement.textContent = `Title: ${titleInput.value}`;

        let recipientNameElement = document.createElement('h4');
        recipientNameElement.textContent = `Recipient Name: ${recipientNameInput.value}`;

        let messageElement = document.createElement('span');
        messageElement.textContent = messageInput.value;

        let buttonDivElement = document.createElement('div');
        buttonDivElement.setAttribute('id', 'list-action');

        let buttonSend = document.createElement('button');
        buttonSend.setAttribute('type', 'submit');
        buttonSend.setAttribute('id', 'send');
        buttonSend.textContent = 'Send';

        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('type', 'submit');
        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.textContent = 'Delete';

        buttonDivElement.appendChild(buttonSend);
        buttonDivElement.appendChild(buttonDelete);

        mainLiElement.appendChild(titleElement);
        mainLiElement.appendChild(recipientNameElement);
        mainLiElement.appendChild(messageElement);
        mainLiElement.appendChild(buttonDivElement);

        listOfMailsElement.appendChild(mainLiElement);

        sendedRecipientName = recipientNameInput.value;
        sendedTitle = titleInput.value;

        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';

        buttonSend.addEventListener('click', onSend);

        function onSend() {

            let liElement = document.createElement('li');

            let sentNameElement = document.createElement('span');
            sentNameElement.textContent = `To: ${sendedRecipientName}`;

            let sentTitleElement = document.createElement('span');
            sentTitleElement.textContent = `Title: ${sendedTitle}`;

            let divButtonElement = document.createElement('div');
            divButtonElement.setAttribute('class', 'btn');

            let buttonDeleteSended = document.createElement('button');
            buttonDeleteSended.setAttribute('type', 'submit');
            buttonDeleteSended.setAttribute('class', 'delete');
            buttonDeleteSended.textContent = 'Delete';

            divButtonElement.appendChild(buttonDeleteSended);

            liElement.appendChild(sentNameElement);
            liElement.appendChild(sentTitleElement);
            liElement.appendChild(divButtonElement);

            sentMailsElement.appendChild(liElement);

            mainLiElement.remove();


            buttonDeleteSended.addEventListener('click', onDeleteSended);

            function onDeleteSended() {

                let liDeletedElement = document.createElement('li');

                let deletedNameElement = document.createElement('span');
                deletedNameElement.textContent = `To: ${sendedRecipientName}`;

                let deleteTitleElement = document.createElement('span');
                deleteTitleElement.textContent = `Title: ${sendedTitle}`;

                liDeletedElement.appendChild(deletedNameElement);
                liDeletedElement.appendChild(deleteTitleElement);

                deletedMailsElement.appendChild(liDeletedElement);

                liElement.remove();
            }
        }

        buttonDelete.addEventListener('click', onDelete);

        function onDelete() {

            let liDeletedElement = document.createElement('li');

            let deletedNameElement = document.createElement('span');
            deletedNameElement.textContent = `To: ${sendedRecipientName}`;

            let deleteTitleElement = document.createElement('span');
            deleteTitleElement.textContent = `Title: ${sendedTitle}`;

            liDeletedElement.appendChild(deletedNameElement);
            liDeletedElement.appendChild(deleteTitleElement);

            deletedMailsElement.appendChild(liDeletedElement);

            mainLiElement.remove();
        }
    }

    buttonReset.addEventListener('click', onReset);

    function onReset(event) {

        event.preventDefault();

        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}

solve()