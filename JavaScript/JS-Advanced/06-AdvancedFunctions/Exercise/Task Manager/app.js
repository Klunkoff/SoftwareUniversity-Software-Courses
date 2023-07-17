function solve() {
 
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');
    let buttonAdd = document.getElementById('add');
 
    let openTaskElement = document.querySelector('.orange').parentElement.nextElementSibling;
    let inProgresElement = document.getElementById('in-progress');
    let completeElement = document.querySelector('.green').parentElement.nextElementSibling;
 
    buttonAdd.addEventListener('click', onAdd);
 
    function onAdd(event) {
 
        event.preventDefault();
 
        if (taskInput.value == '' || descriptionInput.value == '' ||
        dateInput.value == '') {
 
            return;
        }
 
        let mainArticleElement = document.createElement('article');
 
        let taskElement = document.createElement('h3');
        taskElement.textContent = taskInput.value;
 
        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${descriptionInput.value}`;
 
        let dateElement = document.createElement('p');
        dateElement.textContent = `Due Date: ${dateInput.value}`;
 
        let buttonDivElement = document.createElement('div');
        buttonDivElement.setAttribute('class', 'flex');
 
        let buttonStart = document.createElement('button');
        buttonStart.setAttribute('class', 'green');
        buttonStart.textContent = 'Start';
 
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('class', 'red');
        buttonDelete.textContent = 'Delete';
 
        buttonDivElement.appendChild(buttonStart);
        buttonDivElement.appendChild(buttonDelete);
 
        mainArticleElement.appendChild(taskElement);
        mainArticleElement.appendChild(descriptionElement);
        mainArticleElement.appendChild(dateElement);
        mainArticleElement.appendChild(buttonDivElement);
 
        openTaskElement.appendChild(mainArticleElement);
 
        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
 
        buttonStart.addEventListener('click', onStart);
 
        function onStart() {
 
            inProgresElement.appendChild(mainArticleElement);
 
            buttonStart.remove();
 
            let buttonFinish = document.createElement('button');
            buttonFinish.setAttribute('class', 'orange');
            buttonFinish.textContent = 'Finish';
 
            buttonDivElement.appendChild(buttonFinish);
 
            buttonFinish.addEventListener('click', onFinish);
 
            function onFinish() {
                completeElement.appendChild(mainArticleElement);
                buttonDivElement.remove();
            }
        }
 
        buttonDelete.addEventListener('click', onDelete);
 
        function onDelete() {
            mainArticleElement.remove();
        }
    }
}