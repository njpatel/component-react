/** @jsx React.DOM */
var React = require('react-with-addons');

var Main = React.createClass({
  render: function() {
    return <h1>Hello, world!</h1>;
  }
});

React.renderComponent(<Main />,
                      document.getElementById('example'));
