//
const DOMAIN = `https://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
const MOUNTAIN = "stratton"

const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const name = document.querySelector("#name")
const offer = document.querySelector("#offer")
const btn = document.querySelector("#btn")

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

//  Creating Customer profiles with offers opt in.
function createProfile(e) {
  let profileData = `{
    "token": "UNna9N",
    "properties": {
      "$email":"${email.value}",
      "$phone_number:"${phone.value}"
      "name":"${yourName.value}",
      "offers":"${offers.value}",
  }}`
  // Passing object to postProfileData
  postProfileData(profileData)
}

// Post request to Klaviyo identify API per the docs. Sending profileData as parameter from createProfile function
function postProfileData(profileData) {
  const options = {
    method: "POST",
    headers: {
      Accept: "text/html",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      data: profileData,
    }),
  }
  fetch("https://a.klaviyo.com/api/identify", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

// EVENT LISTENERS -  Calling createProfile on click.
btn.addEventListener("click", createProfile)
