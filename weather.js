const DOMAIN = `https://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
const MOUNTAIN = "stratton"

// Requesting latest weather data from OpenWeatherAPI
function getWeather() {
  fetch(
    `${DOMAIN}q=
    ${MOUNTAIN}${API_KEY}${UNIT}
    `
  )
    .then((response) => response.json())
    .then((data) => {
      // Passing weather object to profile creation function
      weatherProfile(data)
    })
    .catch((error) => console.error(error))
}

getWeather()

function weatherProfile(data) {
  console.log(data)
  // Converting visibility from meters to miles
  let visibilityCalc = Math.round(data.visibility / 1609)

  let weatherProfileData = `{
    "token": "UNna9N",
    "properties": {
      "$email":"strattonweather@stratton.com",
      "currentTemp":"${data.main.temp}",
      "feelsLike":"${data.main.feels_like}",
      "wind":"${data.wind.speed}",
      "description":"${data.weather.description}",
      "visiblity":"${visibilityCalc}",
  }}`
}

// console.log(openTrails, currentTemp, feelsLike, wind, description)

// Generates a random number of trails between 10 and 95... In the real world Stratton could replace this with an accurate data feed.
function generateTrails(min, max) {
  openTrails = Math.floor(Math.random() * (max - min) + min)
}
generateTrails(10, 95)

console.log(openTrails)
