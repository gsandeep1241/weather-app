var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%' 
  },
  header: { 
    backgroundColor: 'rgba(252, 90, 44, 0.89)',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    padding: "5px",
    alignItems: 'center'
  }
}

var Main = React.createClass({
    getDefaultProps: function() {
        return{
            direction: 'row'
        }
    },
    render: function() {
        return(
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={{margin:0}}>Weather App</h2>
                    <GetCityContainer direction={this.props.direction} />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
})

module.exports= Main;