const apiKey = '0ec514be81903094e5afc7d4430ec303';

function getWeatherByCity() {
    const city = document.getElementById('cityInput').value.trim();

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const encodedCity = encodeURIComponent(city); // encode spaces & special chars
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`;

    console.log("Requesting:", apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API key issue');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const name = data.name;
            const desc = data.weather[0].description;

            document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
            document.getElementById('cityName').textContent = `City: ${name}`;
            document.getElementById('dayName').textContent = `Day: ${getCurrentDay()} - ${desc}`;
        })
        .catch(error => {
            alert('Error: ' + error.message);
            console.error("API Fetch Error:", error);
        });
}

function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
}
