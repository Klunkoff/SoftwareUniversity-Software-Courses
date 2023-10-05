function attachEvents() {

    let buttonGetWeather = document.getElementById('submit');
    let locationInput = document.getElementById('location');
    let forecastElement = document.getElementById('forecast');
    let labelCondition = document.querySelector('#current .label');
    let currentWeatherElement = document.getElementById('current');
    let upcomingWeatherElement = document.getElementById('upcoming');

    let weatherSymbols = {

        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }

    buttonGetWeather.addEventListener('click', onGetWeather);

    function onGetWeather() {

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then((response) => response.json())
            .then(onData)
            .catch(() => {
                labelCondition.textContent = 'Error';
                forecastElement.style.display = 'block';
            });

        function onData(data) {

            let currentLocation = data.find((location) => location.name == locationInput.value);

            fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentLocation.code}`)
                .then((response) => response.json())
                .then(todayWeather)
                .catch(() => {
                    labelCondition.textContent = 'Error';
                    forecastElement.style.display = 'block';
                });

            function todayWeather(data) {

                let divForecastsElement = document.createElement('div');
                divForecastsElement.setAttribute('class', 'forecasts');

                let conditionSymbolElement = document.createElement('span');
                conditionSymbolElement.setAttribute('class', 'condition symbol');
                conditionSymbolElement.textContent = weatherSymbols[data.forecast.condition];

                let conditionElement = document.createElement('span');
                conditionElement.setAttribute('class', 'condition');

                let locationElement = document.createElement('span');
                locationElement.setAttribute('class', 'forecast-data');
                locationElement.textContent = data.name;

                let degreesElement = document.createElement('span');
                degreesElement.setAttribute('class', 'forecast-data');
                degreesElement.textContent = `${data.forecast.low}${'°'}/${data.forecast.high}${'°'}`;

                let weatherElement = document.createElement('span');
                weatherElement.setAttribute('class', 'forecast-data');
                weatherElement.textContent = data.forecast.condition;

                conditionElement.appendChild(locationElement);
                conditionElement.appendChild(degreesElement);
                conditionElement.appendChild(weatherElement);

                divForecastsElement.appendChild(conditionSymbolElement);
                divForecastsElement.appendChild(conditionElement);

                currentWeatherElement.appendChild(divForecastsElement);
            }

            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentLocation.code}`)
                .then((response) => response.json())
                .then(upcomingWeather)
                .catch(() => {
                    labelCondition.textContent = 'Error';
                    forecastElement.style.display = 'block';
                });

            function upcomingWeather(data) {

                let divForecastInfo = document.createElement('div');
                divForecastInfo.setAttribute('class', 'forecast-info');

                data.forecast.forEach((el) => {

                    let upcomingElement = document.createElement('span');
                    upcomingElement.setAttribute('class', 'upcoming');

                    let symbolElement = document.createElement('span');
                    symbolElement.setAttribute('class', 'symbol');
                    symbolElement.textContent = weatherSymbols[el.condition];

                    let degreesElement = document.createElement('span');
                    degreesElement.setAttribute('class', 'forecast-data');
                    degreesElement.textContent = `${el.low}${'°'}/${el.high}${'°'}`;

                    let weatherElement = document.createElement('span');
                    weatherElement.setAttribute('class', 'forecast-data');
                    weatherElement.textContent = el.condition;

                    upcomingElement.appendChild(symbolElement);
                    upcomingElement.appendChild(degreesElement);
                    upcomingElement.appendChild(weatherElement);

                    divForecastInfo.appendChild(upcomingElement);
                });

                upcomingWeatherElement.appendChild(divForecastInfo); 
            }

            forecastElement.style.display = 'block';
        }
    }
}

attachEvents();