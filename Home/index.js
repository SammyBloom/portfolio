/*
    Weather API call for Lagos, Nigeria using fetch()
*/

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Lagos';
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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getapi();