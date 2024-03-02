const apiKey = "Your api key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kathmandu";
async function checkweather(){
    const response  = await fetch(apiUrl +`&appid=${apiKey}`)
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

}
checkweather();