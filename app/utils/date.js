var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var dateHelpers = {
    getDate: function(dateInS) {
        var dateInMs = dateInS*1000;
        var date = new Date(dateInMs);
        var day = days[date.getDay()];
        var month = months[date.getMonth()];
        var dayOfMonth = date.getDate();
        
        var finalDate = day + ', ' + month + ' ' + dayOfMonth;
        return finalDate;
    }
}

module.exports = dateHelpers;