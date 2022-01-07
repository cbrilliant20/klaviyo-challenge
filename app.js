const DOMAIN = `https://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
const MOUNTAIN = "stratton"

function getWeather() {
  fetch(
    `${DOMAIN}q=
    ${MOUNTAIN}${API_KEY}${UNIT}
    `
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      console.log(data.main.feels_like)
    })
    .catch((error) => console.error(error))
}

getWeather()
