function extract(content) {

    let result = [];
    let pattern = /\(([\w ]+)\)/g;
    let text = document.getElementById(content).textContent;
    let matches = pattern.exec(text);

    while (matches != null) {

        result.push(matches[1]);
        matches = pattern.exec(text);
    }

    return result.join(';');
}