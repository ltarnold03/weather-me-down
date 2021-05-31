var cityFormEl = document.querySelector("#city-input");
var nameInputEl = document.querySelector("#name");
var cityName = nameInputEl.value.trim();


var formSubmitHandler = function(event) {
    event.preventDefault();

    var cityName = nameInputEl.value.trim();

    if (cityName) {
        getCity(cityName);
        nameInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }

    console.log(cityName);
};

cityFormEl.addEventListener("submit", formSubmitHandler);

// current weather search by city
var getCity = function () {
    var myKey = "b21e2c0a7edf02809824c96136509926"
    var getUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" + {cityName} + "&appid=" + {myKey};
    console.log(getUrl);

    fetch(getCity).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
}

// 5 day forcast
var forcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + {cityName} + "&appid=" + {myKey};