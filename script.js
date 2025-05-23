// script.js

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.querySelector('.weatherInfo h2').textContent = data.name;
            document.querySelector('.weatherInfo h3').textContent = `Temperature: ${data.main.temp}°C`;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
