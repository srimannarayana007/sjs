const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        const apiKey = '53f0a3fcc7c6b5109a93d86c93deb513';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                locationElement.textContent = location;
                temperatureElement.textContent = `Temperature: ${temperature}°C`;
                descriptionElement.textContent = `Description: ${description}`;
            })
            .catch(error => console.error(error));
    }
});