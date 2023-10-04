function solve() {

    let infoElement = document.querySelector('.info');
    let buttonDepart = document.getElementById('depart');
    let buttonArrive = document.getElementById('arrive');

    let currentStop = 'depot';
    let arrivedAt = '';

    function depart() {
        
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop}`)
        .then((response) => response.json())
        .then(onData)
        .catch(onError)

        function onData(data) {

            infoElement.textContent = `Next stop ${data.name}`;
            currentStop = data.next;
            arrivedAt = data.name;

            buttonDepart.disabled = true;
            buttonArrive.disabled = false;
        }

        function onError() {

            infoElement.textContent = 'Error';
            buttonArrive.disabled = true;
            buttonDepart.disabled = true;
        }
    }

    function arrive() {
       
        infoElement.textContent = `Arriving at ${arrivedAt}`;

        buttonArrive.disabled = true;
        buttonDepart.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();