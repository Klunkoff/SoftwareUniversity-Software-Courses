function getInfo() {
 
    let stopIDInput = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
 
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIDInput.value}`)
        .then((response => response.json()))
        .then(onData)
        .catch(onError);
 
    function onData(data) {
 
        stopIDInput.value = '';
 
        let busesElement = document.getElementById('buses');
 
        let addedBusesArray = Array.from(document.querySelectorAll('#buses li'));
        addedBusesArray.forEach((bus) => bus.remove()); 
 
        stopNameElement.textContent = data.name;
 
        let busesEntries = Object.entries(data.buses);
 
        for (let [busID, time] of busesEntries) {
 
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${busID} arrives in ${time} minutes`;
            busesElement.appendChild(liElement);
        }
    }
 
    function onError() {
 
        let addedBusesArray = Array.from(document.querySelectorAll('#buses li'));
        addedBusesArray.forEach((bus) => bus.remove()); 
 
        stopNameElement.textContent = 'Error';
    }
}