class Weather {
    constructor(maxTemp, minTemp, windVelocity, climate) {
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.windVelocity = windVelocity;
        this.climate = climate;
    }
    averageTemp() {
        return (this.maxTemp + this.minTemp) / 2;
    }
}

const menuContainer = document.getElementById("menu-container");
const forecastContainer = document.getElementById("forecast-container");

const MinTemperatures = [ -8, 0, 3, -2, 1, -4, 2 ];
const MaxTemperatures = [ 25, 30, 28, 32, 27, 29, 31 ];

const Week = [
    { day: "Monday", weather: new Weather(MaxTemperatures[0], MinTemperatures[0], 15, "Sunny")},
    { day: "Tuesday", weather: new Weather(MaxTemperatures[1], MinTemperatures[1], 20, "Windy")},
    { day: "Wednesday", weather: new Weather(MaxTemperatures[2], MinTemperatures[2], 10, "Rainy")},
    { day: "Thursday", weather: new Weather(MaxTemperatures[3], MinTemperatures[3], 25, "Windy")},
    { day: "Friday", weather: new Weather(MaxTemperatures[4], MinTemperatures[4], 30, "Stormy")},
    { day: "Saturday", weather: new Weather(MaxTemperatures[5], MinTemperatures[5], 18, "Sunny")},
    { day: "Sunday", weather: new Weather(MaxTemperatures[6], MinTemperatures[6], 22, "Windy")}
];

function showForecast(dayData) {
    forecastContainer.innerHTML = `
        <div class="forecast-card">
            <h2>${dayData.day}</h2>
            🌡 Min Temp: ${dayData.weather.minTemp}°C<br>
            🔥 Max Temp: ${dayData.weather.maxTemp}°C<br>
            📊 Avg Temp: ${dayData.weather.averageTemp()}°C<br>
            🌬 Wind: ${dayData.weather.windVelocity} km/h<br>
            ☁ Climate: ${dayData.weather.climate}
        </div>
    `;
}

Week.forEach(dayData => {
    const button = document.createElement("div");
    button.className = "day-button";
    button.textContent = dayData.day;

    button.addEventListener("click", () => {
        document.querySelectorAll(".day-button")
            .forEach(b => b.classList.remove("active"));

        button.classList.add("active");
        showForecast(dayData);
    });

    menuContainer.appendChild(button);
});

document.querySelector(".day-button").classList.add("active");
showForecast(Week[0]);