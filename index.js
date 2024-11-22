const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "1d417d16dab8c9e34b8816ee7081c029";
weatherForm.addEventListener('submit',async event=>{
   event.preventDefault;
   const city = cityInput.value;
   if(city){
      try{
       const weatherData = await getWeatherData(city);
       displayWeatheInfo(weatherData);
      }
      catch(error)
      {
        console.error(error);
        displayError();
      }
   }
   else{
    displayError('please enter a city');
   }
})
async function getWeatherData(city){
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
 const response = await fetch(apiUrl);
 if(!response.ok){
   throw new Error("couldn't fetch weather data");
 }
 return response.json();
}

function displayWeatheInfo(data){
     console.log(data);
}
function getWeatherEmoji(WeatherId){

}
function displayError(message){
 const errorDisplay = document.createElement('p');
 errorDisplay.textContent = message;
 errorDisplay.classList.add('errorDisplay');

 card.textContent = "";
 card.style.display = "flex";
 card.appendChild(errorDisplay)

}