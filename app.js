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
      console.log(data)
      console.log(data.main.feels_like)
    })
    .catch((error) => console.error(error))
}

//  Creating Customer profiles with email/SMS opt in.
function createProfile(e) {
  let profileData = `{
    "token": "UNna9N",
    "properties": {
      "$email":"${email.value}",
      "$phone_number:"${phone.value}"
      "name":"${yourName.value}",
      "offers":"${offers.value}",
  }}`
}
