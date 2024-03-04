const apiKey = "Enter your API key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city){
    const response  = await fetch(apiUrl + city +  `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
        

      
    }else{
    let data = await response.json();
    let icon = data.weather[0].icon


    document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + "@4x.png"
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display ="none";
    document.querySelector(".details").style.display ="flex";
    document.querySelector(".weather-image").style.display ="flex";

    }
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
