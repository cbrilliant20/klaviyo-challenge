// const DOMAIN = `https://api.openweathermap.org/data/2.5/weather?`
// const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
// const UNIT = `&units=imperial`
// const MOUNTAIN = "stratton"
// let openTrails

// // Requesting latest weather data from OpenWeatherAPI at 30 minute intervals
// // setInterval(
// function getWeather() {
//   fetch(
//     `${DOMAIN}q=
//     ${MOUNTAIN}${API_KEY}${UNIT}
//     `
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // Passing weather object to profile creation function and invoking
//       weatherProfile(data)
//     })
//     .catch((error) => console.error(error))
//   // Invoking generate trails function
//   generateTrails(10, 95)
// }
// // , 30 * 1000)

// getWeather()

// // Creating/Updating current weather data profile
// function weatherProfile(data) {
//   // console.log(data)
//   // Converting visibility from meters to miles
//   let visibilityCalc = Math.round(data.visibility / 1609)
//   let currentTemp = Math.round(data.main.temp)

//   let weatherData = `{
//     "token": "UNna9N",
//     "properties": {
//       "$email":"strattonweather@stratton.com",
//       "name":"Current Weather Data",
//       "currentTemp":"${data.main.temp} F",
//       "feelsLike":"${data.main.feels_like} F",
//       "wind":"${data.wind.speed} mph",
//       "description":"${data.weather[0].description}",
//       "visiblity":"${visibilityCalc} miles",
//       "openTrails":"${openTrails}/95"
//   }}`
//   postWeatherData(weatherData)
// }

// // Generates a random number of trails between 10 and 95... In the real world Stratton could replace this with an accurate data feed.
// function generateTrails(min, max) {
//   openTrails = Math.floor(Math.random() * (max - min) + min)
// }

// // Post request to Klaviyo identify API per the docs. Sending weatherData as parameter from weatherProfile function
// // function postWeatherData(weatherData) {
// //   // console.log(weatherData)
// //   const options = {
// //     method: "POST",
// //     headers: {
// //       Accept: "text/html",
// //       "Content-Type": "application/x-www-form-urlencoded",
// //     },
// //     body: new URLSearchParams({
// //       data: weatherData,
// //     }),
// //   }

// //   fetch("https://a.klaviyo.com/api/identify", options)
// //     .then((response) => response.json())
// //     .then((response) => console.log(response))
// //     .catch((error) => console.error(error))
// // }
