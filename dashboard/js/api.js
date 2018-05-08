$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&id=524901&APPID=8b16d710b1de2d362e7d2678d65818bd";
    $.getJSON(url, function(data){
      var temperature = data.main.temp;
      var temperatureCel = Math.round(temperature - 273);
      $('.weather-container .weather').html('<p class="city-name">'+ data.name + '</p>' +
                      '<div class="wrapper-temp"><p class="temperature">' + temperatureCel + '&degC</p>' +
                      '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"></div>' +
                      '<p class="descr-weather">' + data.weather[0].description + '</p>' +
                      '<div class="details-weather">' +
                      '<div class="wind">' +
                      '<p>Wind</p>' +
                      '<p class="right-position">' + data.wind.speed + ' meter/sec</p>' +
                      '</div>' +
                      '<div class="pressure">' +
                      '<p>Pressure</p>' +
                      '<p class="right-position">' + data.main.pressure + ' mm</p>' +
                      '</div>');
    });
	});
});
