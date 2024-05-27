document.addEventListener("DOMContentLoaded", function () {
    const ApiKey = "f65a07590eba3a860b21630d78c7cf82";
    const ApiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".Weather-img");

    async function CheckWeather(City) {
        const Response = await fetch(ApiURL + City + `&appid=${ApiKey}`);
        let data = await Response.json();

        console.log(data);

        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".Percent").innerHTML = data.main.humidity + "%";
        document.querySelector(".Speed").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/Clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (data.weather[0].main == "Heavy rain") {
            weatherIcon.src = "img/heavy-rain.png";
        }
        else if (data.weather[0].main == "Storm") {
            weatherIcon.src = "img/storm.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/winter.png";
        }
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/sun.png";
        }
    }

    searchBtn.addEventListener("click", () => {
        CheckWeather(searchBox.value);
    });
});
