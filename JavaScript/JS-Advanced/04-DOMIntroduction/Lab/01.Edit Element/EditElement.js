// SOLUTION 1

function editElement(reference, match, replacer) {
    
    let result = reference.textContent.split(match).join(replacer);
    reference.textContent = result;
}

// SOLUTION 2

// function editElement(reference, match, replacer) {
    
//     let text = reference.textContent;
//     let matches = new RegExp(match, 'g');
//     let result = text.replace(matches, replacer)
//     reference.textContent = result;
// }