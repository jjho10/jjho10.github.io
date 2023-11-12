// Geolocation and weather

const API_KEY = "eedcd9aa330fecfc049862ae98148079";

function onGeoPass(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
        city.innerText = data.name;
    }));
}

function onGeoFail(){
    alert("Can't get the location. The weather would not be provided.")
}

navigator.geolocation.getCurrentPosition(onGeoPass,onGeoFail)