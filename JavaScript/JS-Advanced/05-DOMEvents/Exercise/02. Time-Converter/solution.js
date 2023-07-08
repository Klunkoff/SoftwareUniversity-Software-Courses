function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    daysButton.addEventListener('click', daysConverter);

    let hoursButton = document.getElementById('hoursBtn');
    hoursButton.addEventListener('click', hoursConverter);

    let minutesButton = document.getElementById('minutesBtn');
    minutesButton.addEventListener('click', minutesConverter);

    let secondsButton = document.getElementById('secondsBtn');
    secondsButton.addEventListener('click', secondsConverter);

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    function daysConverter() {

        let days = Number(daysInput.value);
        let hours = days * 24;
        let minutes = days * 1440;
        let seconds = days * 86400;

        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }

    function hoursConverter() {

        let hours = Number(hoursInput.value);
        let days = hours / 24;
        let minutes = days * 1440;
        let seconds = days * 86400;

        daysInput.value = days;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }

    function minutesConverter() {

        let minutes = Number(minutesInput.value);
        let days = minutes / 1440;
        let hours = days * 24;
        let seconds = days * 86400;

        daysInput.value = days;
        hoursInput.value = hours;
        secondsInput.value = seconds;
    }

    function secondsConverter() {

        let seconds = Number(secondsInput.value);
        let days = seconds / 86400;
        let hours = days * 24;
        let minutes = days * 1440;

        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
    }
}