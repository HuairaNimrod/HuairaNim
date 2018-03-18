var weatherObject = new XMLHttpRequest();


weatherObject.open('GET','http://api.wunderground.com/api/241df0f4270afc58/conditions/forecast/q/SC/Greenville.json', true);

weatherObject.send();
weatherObject.onload = function(){
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
            document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;  //weather image
    document.getElementById('currenTemperature').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('currentForecast').innerHTML = weatherInfo.forecast.txt_forecast.forecastday[1].fcttext;//current forecast
    
}