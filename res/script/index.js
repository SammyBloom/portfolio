require("dotenv").config();
/*
    Weather API call for Lagos, Nigeria using fetch()
*/

const api_key = process.env.RapidAPI_KEY;
console.log(api_key);

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=Lagos";
var options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};


async function getapi(){
// console.log(options);
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const cityEl = document.getElementById("city");
    const country = document.getElementById("country");
    const latitude = document.getElementById("lat");
    const longitude = document.getElementById("long");
    const temperature = document.getElementById("temp");
    const temperature_feel = document.getElementById("temp-feel");
    const todayDate = document.getElementById("date");
    const city2 = document.getElementById("city2");

    cityEl.innerHTML = result.location.name;
    country.innerHTML = result.location.country;
    latitude.innerHTML = result.location.lat;
    longitude.innerHTML = result.location.lon;
    temperature.innerHTML = result.current.temp_c;
    temperature_feel.innerHTML = result.current.feelslike_c;
    todayDate.innerHTML = result.location.localtime;
    city2.innerHTML = result.location.name;
  } catch (error) {
    console.error(error);
  }  
}

getapi();

