const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const yourName = document.querySelector("#name")
const btn = document.querySelector("#btn")
const formContainer = document.querySelector(".form-container")
const confirmMessage = document.querySelector(".confirm-message")

//  Creating Customer profiles with offers opt in.
function createProfile(e) {
  e.preventDefault()
  let profileData = `{
    "token": "UNna9N",
    "properties": {
      "$email":"${email.value}",
      "$phone_number":"${phone.value}",
      "name":"${yourName.value}",
      "optIn":"true"
  }}`
  // Passing object to postProfileData
  postProfileData(profileData)
  formContainer.classList.add("hidden")
  confirmMessage.classList.add("active")
  confirmMessage.classList.remove("confirm-message")
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

// EVENT LISTENERS -  Calling createProfile on click.
btn.addEventListener("click", createProfile)
