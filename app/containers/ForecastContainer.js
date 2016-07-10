var React = require('react');
var Forecast = require('../components/Forecast');
var helpers = require('../utils/api');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return{
           isLoading: true,
           forecastData: [] 
        }    
    },
    componentDidMount: function() {
        this.setState({
            isLoading: true,
            forecastData: []
        })
        helpers.getForecast(this.props.routeParams.city)
            .then(function(response) {
                this.setState({
                    isLoading: false,
                    forecastData: response.data.list
                });
            }.bind(this))
        
    },
    componentWillReceiveProps: function(nextProps) {
        
        helpers.getForecast(nextProps.routeParams.city)
            .then(function(response) {
                this.setState({
                    isLoading: false,
                    forecastData: response.data.list
                });
            }.bind(this))
    },
    handleElementClick: function(weather) {
        
        var city = this.props.routeParams.city;
        this.context.router.push({
            pathname: '/detail/' + city,
            state: {
                weatherDetails: weather
            }
        })  
    },
    render: function() {
        return(
            <Forecast isLoading={this.state.isLoading} forecastData={this.state.forecastData} city={this.props.routeParams.city} 
            onElementClick = {this.handleElementClick}/>
        )
    }
})

module.exports = ForecastContainer;