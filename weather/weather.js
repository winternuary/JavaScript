const where = document.querySelector("#where");
const weather = document.querySelector("#weather");

const API_KEY = "b7f0895077cd8cae39408ea264d4f80e";

function showAPI(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      where.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function showNotAPI() {
  alert("주소를 불러오지 못했어요!");
}

navigator.geolocation.getCurrentPosition(showAPI, showNotAPI);
