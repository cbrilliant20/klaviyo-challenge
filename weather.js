const DOMAIN = `https://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
const MOUNTAIN = "stratton"
let temp = document.querySelector("#temp")
let feelsLike = document.querySelector("#feels-like")
let humidity = document.querySelector("#humidity")
let wind = document.querySelector("#wind")
let visibility = document.querySelector("#visibility")
let trails = document.querySelector("#trails")
let openTrails
// Requesting latest weather data from OpenWeatherAPI
function getWeather() {
  fetch(
    `${DOMAIN}q=
    ${MOUNTAIN}${API_KEY}${UNIT}
    `
  )
    .then((response) => response.json())
    .then((data) => {
      // Passing weather object to profile creation function and invoking
      currentWeather(data)
    })
    .catch((error) => console.error(error))
}

getWeather()

// Creating/Updating current weather data profile
function currentWeather(data) {
  // Generating Trails
  generateTrails(10, 95)
  // Converting visibility from meters to miles and rounding temps
  let currentTempCalc = Math.round(data.main.temp)
  let feelsLikeCalc = Math.round(data.main.feels_like)
  let visibilityCalc = Math.round(data.visibility / 1609)

  temp.innerHTML = currentTempCalc + "℉"
  feelsLike.innerHTML = feelsLikeCalc + "℉"
  humidity.innerHTML = data.main.humidity + "%"
  wind.innerHTML = data.wind.speed + " mph"
  visibility.innerHTML = visibilityCalc + " miles"
  trails.innerHTML = openTrails + "/95"
}

// Generates a random number of trails between 10 and 95... In the real world Stratton could replace this with an accurate data feed.
function generateTrails(min, max) {
  openTrails = Math.floor(Math.random() * (max - min) + min)
}
