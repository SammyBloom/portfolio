/*
    Weather API call for Lagos, Nigeria using fetch()
*/

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=Lagos";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '49d0fcef32mshd7c75c54b9ff7fap152f81jsn2f10f04c9a2a',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

async function getapi(){
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


