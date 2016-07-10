var React = require('react');
var PropTypes = React.PropTypes;
var dateHelpers = require('../utils/date');

var styles = {
    date: {
        fontSize: "30px",
        color: "#333",
        fontWeight: "100"
    }
}

function WeatherElement(props) {
    var source = './app/images/weather-icons/' + props.icon + '.svg';
    return(
        <div>
            <img src={source} style={{height:"130px"}} />
            <h2 style={styles.date}>{dateHelpers.getDate(props.time)}</h2>
        </div>
    )
}

WeatherElement.propTypes= {
    time: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}

module.exports= WeatherElement;