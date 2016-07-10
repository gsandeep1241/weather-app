var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var WeatherElement = require('./WeatherElement');

function puke(object) {
    return(
        <pre>{JSON.stringify(object, null, ' ')}</pre>
    )
}

var localStyles = {
    header: {
        fontSize: "65px",
        color: '#333',
        fontWeight: "100",
        textAlign: 'center',
        marginTop: "50px",
        marginBottom: "30px"
    },
    caption: {
        fontSize: "30px",
        textAlign: "center",
        color: "#333",
        fontWeight: "100"
    },
    weatherElements: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: "1200px",
        margin: "50px"
    },
    singleElement: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fluxDirection: 'column',
        margin: "35px"
    }
}

function Forecast(props) {
    if(props.isLoading === true){
        return(
            <div style={styles.transparentBg}><h1 style={localStyles.header}>Loading!</h1> </div>
        )   
    }else {
        var report = props.forecastData.map(function(item){
            return (
                <div key={item.dt} style={localStyles.singleElement} onClick={props.onElementClick.bind(null, item)}>
                    <WeatherElement time={item.dt} icon={item.weather[0].icon}/>
                </div>
            )
        })
        return(
            <div key={props.city}>
            <h1 style={localStyles.header}>{props.city}</h1>
            <p style={localStyles.caption}>Select a day</p>
            <div style={localStyles.weatherElements}>
                {report}
            </div>
            </div>
        )
    }
    
}

Forecast.propTypes= {
    isLoading: PropTypes.bool.isRequired,
    forecastData: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
    onElementClick: PropTypes.func.isRequired
}

module.exports= Forecast;