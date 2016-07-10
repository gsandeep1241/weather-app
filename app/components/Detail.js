var React = require('react');
var PropTypes = React.PropTypes;
var WeatherElement = require('./WeatherElement');
var tempHelpers = require('../utils/temp');

var localStyles= {
    visual: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'center',
        margin: "35px"
    },
    textVisual: {
        fontSize: "34px",
        fontWeight: "100",
        maxWidth: "400px",
        textAlign: "center",
        margin: "auto"
    }
}

function Detail(props) {
    return(
        <div>
            <div style={localStyles.visual}>
                <WeatherElement time={props.weatherDetails.dt} icon={props.weatherDetails.weather[0].icon}/>
            </div>
            <div style={localStyles.textVisual}>
                <p>{props.city}</p>
                <p>{props.weatherDetails.weather[0].description}</p>
                <p>
                    <span>min temp: </span>
                    <span>{tempHelpers.getTemp(props.weatherDetails.temp.min)}</span>
                    <span> degrees</span>
                </p>
                <p>
                    <span>max temp: </span>
                    <span>{tempHelpers.getTemp(props.weatherDetails.temp.max)}</span>
                    <span> degrees</span>
                </p>
                <p>
                    <span>humidity: </span>
                    <span>{props.weatherDetails.humidity}</span>
                </p>
            </div>
        </div>
    )
}

Detail.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    city: PropTypes.string.isRequired,
    weatherDetails: PropTypes.object.isRequired
}

module.exports= Detail;