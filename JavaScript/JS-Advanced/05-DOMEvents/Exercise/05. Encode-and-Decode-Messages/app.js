function encodeAndDecodeMessages() {

    let mainElement = document.getElementById('main');
    let encodeMessageDiv = mainElement.children[0];
    let decodeMessageDiv = mainElement.children[1];

    let encodeButton = encodeMessageDiv.children[2];
    let decodeButton = decodeMessageDiv.children[2];

    encodeButton.addEventListener('click', encodeAndSend);
    decodeButton.addEventListener('click', decodeAndRead);

    let encodeTextArea = encodeMessageDiv.children[1];
    let decodeTextArea = decodeMessageDiv.children[1];

    function encodeAndSend() {

        let message = encodeTextArea.value;
        
        let encodedMessage = message
        .split('')
        .map((el) => el.charCodeAt(0) + 1)
        .map((el) => String.fromCharCode(el))
        .join('');

        decodeTextArea.value = encodedMessage;
        
        encodeTextArea.value = '';
    }

    function decodeAndRead() {

        let encodedMessage = decodeTextArea.value;

        let decodedMessage = encodedMessage
        .split('')
        .map((el) => el.charCodeAt(0) - 1)
        .map((el) => String.fromCharCode(el))
        .join('');

        decodeTextArea.value = decodedMessage;
    }
}