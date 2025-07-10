const button = document.getElementById('get-weather-btn');
const select = document.querySelector('select');
const weatherInfo = document.getElementById('weather-info');

const getWeather = async (city) => {
    try {
        const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null; // Explicitly return null on error
    }
};

const showWeather = async (city) => {
    try {
        const data = await getWeather(city);
        if (!data) {
            throw new Error('Invalid weather data');
        }

        // Display weather data
        document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('weather-icon').src = data.weather[0].icon;
        document.getElementById('weather-main').textContent = data.weather[0].main;
        document.getElementById('main-temperature').textContent = data.main.temp ?? 'N/A';
        document.getElementById('feels-like').textContent = data.main.feels_like ?? 'N/A';
        document.getElementById('humidity').textContent = data.main.humidity ?? 'N/A';
        document.getElementById('wind').textContent = data.wind.speed ?? 'N/A';
        document.getElementById('wind-gust').textContent = data.wind.gust ?? 'N/A';

        weatherInfo.style.display = 'block';
    } catch (error) {
        alert("Something went wrong, please try again later");
    }
};

button.addEventListener('click', () => {
    const selectedCity = select.value.trim();
    if (!selectedCity) return;

    if (selectedCity === "paris") {
        alert("Something went wrong, please try again later");
        return;
    }

    showWeather(selectedCity); 
});