// selecting ids

const weatherBox = document.getElementById("weatherBox");
const cityButton = document.getElementById("cityButton");
const cityInput = document.getElementById("cityInput");

// adding eventlistener for check button

cityButton.addEventListener("click", () => {
  let city = cityInput.value;
  let weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bb44571dd246897bb1f5a7efa134b55&units=metric`
  );
  weatherApi
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      getWeather(data);
    })
    .catch((error) => {
      weatherBox.innerHTML = `<div class="d-flex justify-content-center align-item-center mt-5 "><h1>"city not found"</h1></div>`;
    });
});

//functions to print the input value to UI from API

function getWeather(data) {
  weatherBox.innerHTML = `<section
  class="weather-content ${
    data.weather[0].main
  }-content container-fluid d-flex justify-content-center align-items-center"
>
  <div class="weather-card ${data.weather[0].main}-card ">
    <img src="source/${data.weather[0].main}.png" alt="" />
    <h1 class="text-center">${Math.round(data.main.temp)}&deg;C</h1>
    <h5 class="text-center">${data.name}</h5>
    <h6 class="text-center mt-4 mb-1 ">${data.weather[0].main}</h6>
    <p class="text-center">${data.weather[0].description}</p>
  </div>
</section>`;
}
