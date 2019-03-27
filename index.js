const API_KEY = "4619a79f0628568e82a03126707248d9"

function handleFormSubmit(event) {
  event.preventDefault()
  console.log(event)
  const city = document.getElementById("city").value 
  console.log(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  
  document.addEventListener('submit', handleFormSubmit)
  
  //add event listener here for form submission
})
