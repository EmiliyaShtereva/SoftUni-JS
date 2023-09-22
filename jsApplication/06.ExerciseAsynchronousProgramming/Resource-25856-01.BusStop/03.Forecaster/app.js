async function attachEvents() {
    let weatherBtn = document.getElementById('submit');
    let forecastTable = document.getElementById('forecast');
    let input = document.getElementById('location');
    let current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');

    weatherBtn.addEventListener('click', weatherHandler);

    let symbols =
    {
        'Sunny': `&#x2600;`,
        'Partly sunny': `&#x26C5;`,
        'Overcast': '&#x2601',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    async function weatherHandler(e) {
        let location = input.value;

        let forecasts = document.createElement('div');
        let conditionSymbol = document.createElement('span');
        let condition = document.createElement('span');
        let locationName = document.createElement('span');
        let currentDegreees = document.createElement('span');
        let currentCondition = document.createElement('span');

        forecasts.classList.add('forecasts');
        conditionSymbol.classList.add('symbol');
        condition.classList.add('condition');
        locationName.classList.add('forecast-data');
        currentDegreees.classList.add('forecast-data');
        currentCondition.classList.add('forecast-data');

        try {
            let response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            let data = await response.json();

            let neededData = data.find(object => object.name === location);
            let codeNedeed = neededData.code;

            let currentForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${codeNedeed}`);
            let currentForecastData = await currentForecast.json();

            let threeDayForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${codeNedeed}`);
            let threeDayForecastData = await threeDayForecast.json();

            forecastTable.style.display = 'block';

            conditionSymbol.innerHTML = symbols[currentForecastData.forecast.condition];
            locationName.textContent = currentForecastData.name;
            currentDegreees.innerHTML = `${currentForecastData.forecast.low}${symbols['Degrees']}/${currentForecastData.forecast.high}${symbols['Degrees']}`;
            currentCondition.textContent = currentForecastData.forecast.condition;

            condition.appendChild(locationName);
            condition.appendChild(currentDegreees);
            condition.appendChild(currentCondition);
            forecasts.appendChild(conditionSymbol);
            forecasts.appendChild(condition);
            current.appendChild(forecasts);

            const threeDayDiv = document.createElement('div');
            threeDayDiv.classList.add('forecast-info');

            threeDayForecastData.forecast.forEach(d => {
                const upcomingSpan = document.createElement('span');
                const upcomingSymbolSpan = document.createElement('span');
                const upcomingDegreesSpan = document.createElement('span');
                const upcomingWeatherSpan = document.createElement('span');

                upcomingSpan.classList.add('upcoming');
                upcomingSymbolSpan.classList.add('symbol');
                upcomingDegreesSpan.classList.add('forecast-data');
                upcomingWeatherSpan.classList.add('forecast-data');

                upcomingSymbolSpan.innerHTML = symbols[d.condition];
                upcomingDegreesSpan.innerHTML = `${d.low}${symbols['Degrees']}/${d.high}${symbols['Degrees']}`;
                upcomingWeatherSpan.innerHTML = d.condition;

                upcomingSpan.appendChild(upcomingSymbolSpan);
                upcomingSpan.appendChild(upcomingDegreesSpan);
                upcomingSpan.appendChild(upcomingWeatherSpan);
                threeDayDiv.appendChild(upcomingSpan);
            });
            upcoming.appendChild(threeDayDiv);
        } catch (err) {
            forecastTable.style.display = 'block';
            forecastTable.innerText = `${err}`;
        }
    }
}

attachEvents();