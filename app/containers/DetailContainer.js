var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
    getInitialState: function() {
        return{
            isLoading: true
        }
    },
    componentDidMount: function() {
        this.setState({
            isLoading: false
        })
    },
    render: function() {
        return(
            <Detail isLoading={this.state.isLoading} weatherDetails={this.props.location.state.weatherDetails} city={this.props.routeParams.city}/>
        )
    }
})

module.exports= DetailContainer;