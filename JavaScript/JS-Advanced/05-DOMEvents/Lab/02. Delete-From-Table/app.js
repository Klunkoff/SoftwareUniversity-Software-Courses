function deleteByEmail() {
 
    let input = document.querySelector('input').value;
    let resultContent = document.getElementById('result');
    let rowElements = Array.from(document.querySelectorAll('tbody tr'));
 
    for (let row of rowElements) {
 
        let currentEmailElement = row.children[1];
 
        if (currentEmailElement.textContent == input) {
 
            row.remove();
            resultContent.textContent = 'Deleted.';
 
        } else {
 
            resultContent.textContent = 'Not found.';
        }
    }
}