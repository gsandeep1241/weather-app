var React = require('react');
var GetCity = require('../components/GetCity');
var helpers = require('../utils/api');


var GetCityContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired  
    },
    getDefaultProps: function() {
        return{
            direction: 'column'
        }
    },
    propTypes: {
        direction: React.PropTypes.string.isRequired
    },
    handleSubmitCity: function(e) {
        e.preventDefault();
        var city = this.state.city;
        
        this.context.router.push('/forecast/' + city);
        
    },
    getInitialState: function() {
      return{
        city: ''
      }
    },
    handleUpdateCity: function(e) {
        this.setState({
            city: e.target.value
        })
    },
    
    render: function() {
        return(
            <GetCity
            direction= {this.props.direction}
            onSubmitCity={this.handleSubmitCity} 
            onUpdateCity={this.handleUpdateCity}
            city= {this.state.city}/>
        )
    }
})

module.exports= GetCityContainer;