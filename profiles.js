const PUBLIC_API_KEY = "UNna9N"
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const yourName = document.querySelector("#name")
const qty = document.querySelector("#qty")
const day = document.querySelector("#day")
const opt = document.querySelector("#opt")
const btn = document.querySelector("#btn")
const formContainer = document.querySelector(".form-container")
const confirmMessage = document.querySelector(".confirm-container")

//  Creating Customer profiles with offers opt in.
function createProfile(e) {
  e.preventDefault()
  let profileData = `{
    "token": "UNna9N",
    "properties": {
      "$email":"${email.value}",
      "$phone_number":"${phone.value}",
      "name":"${yourName.value}",
      "qty":"${qty.value}",
      "day":"${day.value}",
      "opt":"${opt.value}"
  }}`

  // Passing object to postProfileData
  postProfileData(profileData)
  confirmMessage.classList.add("active")
  confirmMessage.classList.remove("hidden")
}

// Post request to Klaviyo identify API per the docs. Sending profileData as parameter from createProfile function
function postProfileData(profileData) {
  console.log(profileData)
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
    .catch((error) => console.error(error))
}

// Swapping the value of the opt in property if box is checked.
function swapOptValue(e) {
  e.preventDefault()
  if (opt.checked) {
    opt.setAttribute("value", "1")
  } else {
    opt.setAttribute("value", "0")
  }
}

// EVENT LISTENERS
btn.addEventListener("click", createProfile)
opt.addEventListener("change", swapOptValue)
