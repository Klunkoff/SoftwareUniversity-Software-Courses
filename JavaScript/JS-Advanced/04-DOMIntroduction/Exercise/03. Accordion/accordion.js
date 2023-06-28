function toggle() {
 
    let buttonContent = document.getElementsByClassName('button')[0].textContent;
    let paragraphContent = document.querySelector('#extra');
 
    if (buttonContent == 'More') {
 
        paragraphContent.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
 
    } else if (buttonContent == 'Less') {
 
        paragraphContent.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}