var cityFormEl = document.querySelector("#city-input");
var nameInputEl = document.querySelector("#name");

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

cityFormEl.addEventListener("submit", formSubmitHandler);