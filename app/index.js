var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(routes, document.getElementById('app'));