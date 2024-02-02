const apiKey = "34615cfa976fb8c17b62425290bd48cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{

            const data = await response.json();
            console.log(data);
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = (data.main.temp.toFixed(1) + "°C");
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
            if(data.weather[0].main == "Clear") {
                weatherIcon.src = "img/clear.png";
            }
            else if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "img/clouds.png";
            }
            else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "img/rain.png";
            }
            else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "img/drizzle.png";
            }
            else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "img/mist.png";
            }
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});



// const apiKey="34615cfa976fb8c17b62425290bd48cb";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox= document.querySelector(".search input");
// const searchBtn= document.querySelector(".search button");

// async function checkWeather(city){
//     const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
//     var data=await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML= data.name;
//     document.querySelector(".temp").innerHTML= (data.main.temp.toFixed(1)+"°C");
//     document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";
//     document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
// }

// // checkWeather();
//     searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })




// const apiKey="34615cfa976fb8c17b62425290bd48cb";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}";

// const searchBox= document.querySelector(".search input");
// const searchBtn= document.querySelector(".search button");

// async function checkWeather(city){
//     const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
//     var data=await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML= data.name;
//     document.querySelector(".temp").innerHTML= (data.main.temp.toFixed(1)+"°C");
//     document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";
//     document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
// }

// // checkWeather();
//     searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })
