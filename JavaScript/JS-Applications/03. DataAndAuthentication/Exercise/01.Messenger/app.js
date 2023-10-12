function attachEvents() {

    let nameInput = document.querySelector('[name="author"]');
    let messageInput = document.querySelector('[name="content"]');
    let textArea = document.getElementById('messages');

    let buttonSend = document.getElementById('submit');
    let buttonRefresh = document.getElementById('refresh');

    buttonSend.addEventListener('click', onSend);
    buttonRefresh.addEventListener('click', onRefresh);

    let url = 'http://localhost:3030/jsonstore/messenger';

    function onSend() {

        let data = {

            author: nameInput.value,
            content: messageInput.value,
        }

        fetch(url, {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data)
            .catch();

        nameInput.value = '';
        messageInput.value = '';
    }

    function onRefresh() {

        fetch(url)
        .then(response => response.json())
        .then(onData)
        .catch();

        function onData(data) {

            textArea.textContent = '';
            let result = [];
            Object.entries(data).forEach((el) => result.push(`${el[1].author}: ${el[1].content}`));
            textArea.textContent = result.join('\n');
        }
    }
}

attachEvents();