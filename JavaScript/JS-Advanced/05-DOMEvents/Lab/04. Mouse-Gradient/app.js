function attachGradientEvents() {

    let divElementGradient = document.getElementById('gradient');
    let divElementResult = document.getElementById('result');

    divElementGradient.addEventListener('mousemove', showPercentage);

    function showPercentage(event) {

        let currentOffset = event.offsetX;
        let maxWidth = event.target.clientWidth;
        let percentage = Math.floor((currentOffset / maxWidth) * 100);

        divElementResult.textContent = `${percentage}%`;
    }
}