function colorize() {
 
    let tableDataElements = document.querySelectorAll('tr');
 
    for (let i = 1; i < tableDataElements.length; i++) {
 
        let element = tableDataElements[i];
 
        if (i % 2 != 0) {
 
            element.style.backgroundColor = 'teal';
        }
    }
}