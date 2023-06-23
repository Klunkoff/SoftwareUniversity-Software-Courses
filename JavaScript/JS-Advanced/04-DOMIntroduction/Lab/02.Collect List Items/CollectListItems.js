function extractText() {
 
    let result = [];
    let textElements = document.querySelectorAll('li');
    let textArea = document.getElementById('result');
 
    for (let element of textElements) {
        result.push(element.textContent);
    }
 
    textArea.textContent = result.join('\n');
}

