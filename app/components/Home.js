var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles= {
        container: {
            backgroundSize: 'cover',
            backgroundImage: "url('app/images/pattern.svg')",
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            width: '100%'
        },
        header: {
          fontSize: "45px",
          color: 'white',
          fontWeight: "100"
        }
    }

function Home(props) {
    
    return(
        <div style={styles.container}>
            <h1 style = {styles.header}>Enter a City and State</h1> 
            <GetCityContainer />
        </div>
    )
}

module.exports = Home;