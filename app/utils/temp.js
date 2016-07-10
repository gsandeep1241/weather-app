var tempHelpers = {
    getTemp: function(temp) {
        return Math.round((temp - 273.15) * 100) / 100
    }
}

module.exports= tempHelpers;