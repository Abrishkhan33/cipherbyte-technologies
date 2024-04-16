var input_box = document.getElementById('input-box');
var search_btn = document.getElementById('search-btn');
var weather_img = document.getElementById('weather-img');
var temprature = document.getElementById('temprature');
var description = document.getElementById('description');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');


async function checkweather(city){

if(city ==  ''){
    alert("Please enter location");

    
}else{

    var api_key = "51db6d6ff6088261e66f0922a574e2a4";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
   

    var weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    temprature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`;
   
}

}


function searchbtn(){
checkweather(input_box.value);

}



