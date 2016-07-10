var axios = require('axios');

var helpers= {
    getCurrentWeather: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=22760ba9a53e9397bddda3619661a59f');
    },
    getForecast: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=22760ba9a53e9397bddda3619661a59f&cnt=5')
    }
    
}

module.exports= helpers;

