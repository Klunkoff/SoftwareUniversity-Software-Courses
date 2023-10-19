
export function showHideDetails(event) {

    if(event.target.tagName == 'BUTTON') {

        let currentDetails = event.target.nextElementSibling;

        if (currentDetails.style.display == 'inline-block') {
            currentDetails.style.display = 'none';
            event.target.textContent = 'Show status code';

        } else {
            currentDetails.style.display = 'inline-block';
            event.target.textContent = 'Hide status code';
        }
    }
}